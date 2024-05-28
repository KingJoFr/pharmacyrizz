const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const Card = require('../models/Card');
const bcrypt = require('bcrypt'); // dont store plain text passwords in database
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const uploadCards = require('./insertCardData');
const Counter = require('../models/Counter')
const MergedDeck = require('../models/MergedDeck');
const jwtSecret = process.env.JWT_SECRET;
const landingLayout = "../views/layouts/landingLayout";
global.countId = '65c135c702cac41f7abf9a49'



// routes

// check login
const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;  // checking if a token exists i believe
    
    
    if(!token){  //so if there is no token then unauthorized
        
        return res.status(401).json({message: 'Unauthorized'});
    }

    try{
        const decoded = jwt.verify(token, jwtSecret);
        req.userId = decoded.userId;
        next();
    } catch(error){
        
         res.status(401).json({message: 'error caught'});

    }
} 


//functions


// flash cards routes
router.get('/flashcards',authMiddleware, async(req,res)=> {
    
    
    const username = req.session.username;
    
    const locals = {
        
        title: 'flashcards',
        descriptions:'my flashcard app'
    }
    try{ //id: mongoose.ObjectId('65878f28e436dc72e08e88fe') 
        let counter = await Counter.findOne({_id:countId});
    
        
        const data = await MergedDeck.find();
        //const lastCard = await Card.find().sort({$natural:-1}).limit(1);
        
        res.render('flashcards',{locals,data,counter,username});
    }catch(error){
        console.log(error);

}});

router.put('/flashcards',authMiddleware, async(req,res)=>{
    
    const revealedCheck = req.body.revealed;
    
    

    const data = await MergedDeck.find();
    //const lastCard = await MergedDeck.find().sort({$natural:-1}).limit(1);
    const counter = await Counter.findById(countId);
    //const currentCard = data[counter.count];
    const deckLen = await MergedDeck.countDocuments();
    

    //resets the count to zero if user reaches the last card and presses next
    if (counter.count >= deckLen){
        await Counter.findByIdAndUpdate(countId,{
                count : 0
    })

    }else{
    await Counter.findByIdAndUpdate(countId,{
        count : req.body.position_num
    })
 }
    
    
    //counter.set({count:{position}});
    //await counter.save()

    //update card views section // add one to counter.count because it's off by one from the front end counter
    if(revealedCheck == 'revealed'){
        const currentCard = data[counter.count +1].generic; 
        const username = req.session.username;
        const userProfile = await User.findOne({username:`${username}`});
        let userViewsDeck = userProfile.cardTracker;
        const currentCardViews = userViewsDeck.get(currentCard);
        const updatedViews = parseInt(currentCardViews) +1;  
        userViewsDeck.set(currentCard, updatedViews);
        await userProfile.save();
    }
    
     
    res.redirect('flashcards');
})

router.put('/skip',async(req,res)=>{
    const skipNumber = req.body.skipNumber;
    await Counter.findByIdAndUpdate(countId,{
        count : skipNumber
    })
    res.redirect('flashcards');
})

router.put('/reset', async(req,res)=>{
    await Counter.findByIdAndUpdate(countId,{
        count : req.body.reset
    })
    counter = await Counter.findById(countId);
    console.log('counter after reset is', counter.count)
    res.redirect('flashcards');
})

/*
get
home
*/

router.get('', async (req,res)=> {
    res.redirect('../landingPage/landingPage')
    const locals = {
        title: "Home",
        description: "Pharmacyrizz.com a website for pharmacy techs"
        
    }
    try{
        const data = await Post.find();
        res.render('index',{locals, data, currentRoute: "/"});

    }catch(error){
        console.log(error);

    }

 

    
});


// Get post id

router.get('/post/:id', async (req,res)=> {
    try{
        let slug = req.params.id;
        const data = await Post.findById({_id: slug});
        
        const locals = {
        title: data.title,
        description: "A website for pharmacy techs",
        currentRoute: '/post'
    }
   


    
    
    res.render('post',{locals, data, currentRoute: `/post/${slug}`});

    }catch(error){
        console.log(error);

    }

    
});

// get about

router.get('/about', (req, res) => {
    
    try{
        const locals = {
            title: "About ",
            description: " Info about this site",
            currentRoute: '/about'
        }
      
        res.render('about', {locals, currentRoute: "/about"});
    }catch(error) {
        console.log(error);
    }
});


// get contact

router.get('/contact', (req, res) => {
    
    try{
        const locals = {
            title: "Contact",
            description: " How you can contact me",
            currentRoute: '/contact'
        }
      
        res.render('contact', {locals, currentRoute: "/contact"});
    }catch(error) {
        console.log(error);
    }
});





// post searchTerm


    router.post('/search', async (req,res)=> {
    try{
    const locals = {
        title: "Search",
        description: "search"
    }
    
    let searchTerm = req.body.searchTerm;

    const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "")

    const data = await Post.find({
        $or: [
            { title: { $regex: new RegExp(searchNoSpecialChar, 'i')}},
            { body: { $regex: new RegExp(searchNoSpecialChar, 'i')}}
        ]
    });
    
    
    res.render("search", {
        data,
        locals,
        currentRoute: '/'
    });
    
    //res.send(searchTerm);
    }catch(error){
        console.log(error);

    }

    
});

//uploadCards.insertCardData();

module.exports = router;

/*function insertPostData (){
    Post.insertMany([
        {
            title: "Building a Blog1",
            body: "This is the body text"
        },
        {
            title: "Building a Blog2",
            body: "This is the body text"
        },
        {
            title: "Building a Blog3",
            body: "This is the body text"
        },
    ])
}


insertPostData();
*/
/*
function insertCardData (){
    Card.insertMany([
        {
            generic: "Celecoxib",
            brand: "Celebrex"
        },
        {
            generic: "Tadalifil",
            brand: "Cialis"
        },
        {
            generic: "sildenafil",
            brand: "Viagra"
        },
    ])
}
*/

//insertCardData();

/*function insertCounter(){
    Counter.create({
        count: 0
    })
};

insertCounter();
*/