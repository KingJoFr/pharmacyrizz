const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// routes
/*
get
home
*/

router.get('', async (req,res)=> {
    const locals = {
        title: "NodeJs Blog",
        description: "Simple blog created node mongo"
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
        description: "Simple blog created node mongo",
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
            title: "about ",
            description: " Info about my blog and me",
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
            title: "contact",
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
        description: "Simple blog created node mongo"
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