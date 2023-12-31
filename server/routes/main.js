const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const Card = require('../models/Card');
const uploadCards = require('./insertCardData');
const Counter = require('../models/Counter')

// routes




// flash cards routes
router.get('/flashcards', async(req,res)=> {
    const locals = {
        title: 'flashcards',
        descriptions:'my flashcard app'
    }
    try{ //id: mongoose.ObjectId('65878f28e436dc72e08e88fe') 
        let counter = await Counter.findOne({_id:'65878f28e436dc72e08e88fe'});
        console.log('counter is first time', counter.count)
        
        const data = await Card.find();
        res.render('flashcards',{locals,data,counter});
    }catch(error){
        console.log(error);
    }
});

router.put('/flashcards', async(req,res)=>{
     
    
    
    await Counter.findByIdAndUpdate('65878f28e436dc72e08e88fe',{
        count : req.body.position_num
    })
    counter = await Counter.findById('65878f28e436dc72e08e88fe');

    console.log('counter is second time', counter.count)
    //counter.set({count:{position}});
    //await counter.save();
     
     
     
     
     res.redirect('flashcards');
})

router.put('/reset', async(req,res)=>{
    await Counter.findByIdAndUpdate('65878f28e436dc72e08e88fe',{
        count : req.body.reset
    })
    counter = await Counter.findById('65878f28e436dc72e08e88fe');
    console.log('counter after reset is', counter.count)
    res.redirect('flashcards');
})

/*
get
home
*/

router.get('', async (req,res)=> {
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

function insertCounter(){
    Counter.create({
        count: 0
    })
};

//insertCounter();