const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');
const bcrypt = require('bcrypt'); // dont store plain text passwords in database
const jwt = require('jsonwebtoken');
const Card = require('../models/Card')
const MCard = require('../models/MergedDeck')

const adminLayout = "../views/layouts/admin";
const jwtSecret = process.env.JWT_SECRET;


const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host:'smtp.titan.email',
    port: 587,
    secure: false,//use true for port 465 and false for all other ports
    auth: {
        user:'king@kingjonesfrazier.dev',
        pass:'wzEx8dW-b$6N7E$',
    },
});


async function mailer(){
    const info = await transporter.sendMail({
        from: '"king"<king@kingjonesfrazier.dev>',
        to:'kingjofr@gmail.com',
        subject:'test',
        text:'testing',

    });
    console.log('message sent: %s',info.messageId);
}

router.get('/info', async (req,res) =>{
   

    try{
        const user = await User.findOne({username});

        console.log(username);
      
        res.render('admin/deluser', {locals, layout: adminLayout});
    }catch(error) {
        console.log(error);
    }
});

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
         res.status(401).json({message: 'Unauthorized'});

    }
} 
//get admin login page

router.get('/admin', async (req,res) =>{
   

    try{
        const locals = {
            title: "Admin",
            description: " simple blog"
        }
      
        res.render('admin/index', {locals, layout: adminLayout});
    }catch(error) {
        console.log(error);
    }
});

// post admin check login

router.post('/admin', async (req,res) =>{
   

    try{
        const {username, password} = req.body;
        req.session.username = username;
   
        const user = await User.findOne({username});
        if(!user){  //looks like this is checking if the user exist
            
            return res.status(401).json({message: 'Invalid Credentials'});
        }
                    //then here it checks the password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        if(!isPasswordValid){
            return res.status(401).json({message: "Invalid credentials"});
        }

        const token = jwt.sign({userId: user._id}, jwtSecret)
        
        res.cookie('token', token, {httpOnly: true});
        
        res.redirect('/dashboard');
    }catch(error) {
        console.log(error);
    }
});



// register 

router.post('/register', async (req,res) =>{
   
    
    let cardTrackerTest = new Map();
    /*for(let i = 0; i <=201; i++){
        cardTrackerTest.push(i);
    }*/
    
    let cardDeck = await MCard.find().lean();
    for(obj in cardDeck){
        
        let newKey = await cardDeck[obj].generic;
        cardTrackerTest.set(newKey, 0)

        
    }
    console.log('cardTrackerTest',cardTrackerTest);
    //console.log('size of array =', JSON.stringify(cardTrackerTest).length);
    let permissions = true;
    

    
    
    try{
        const {username, password} = req.body;
        const hashedPassword = await bcrypt.hash(password,10);
        try{
            const user = await User.create({username, password: hashedPassword,permissions, cardTracker: cardTrackerTest});
            res.status(201).json({message: 'User Created', user});
        } catch(error){
            if(error.code === 11000){
                res.status(409).json({message: 'User already in use'});
            }
            res.status(500).json({message: 'Internal server error'});
        }
    }catch(error) {
        console.log(error);
    }
});

//get admin- dashboard

router.get('/dashboard', authMiddleware, async (req,res) => {
    mailer().catch(console.error);
    try{
        let username = req.session.username;
        let userProfile = await User.findOne({username: `${username}`})
        const locals={
            title: "Dashboard",
            description: 'Simple Blog created with nodejs'
        }
        
    
        
        //let cardTracking = cuser.cardTracking;
        const data = await Post.find();
        //console.log(data);
        res.render('admin/dashboard', {
        
            locals,
            data ,
            userProfile,
            layout: adminLayout
        });
    }catch(error){
        
        console.log(error);
    }
});

// get cardTracker
router.get('/userCardTracker', async(req,res)=>{
    const username = req.session.username;

    let userProfile = await User.findOne({username: `${username}`}).lean();

    res.send(userProfile.cardTracker);
})

// get admin create new post

router.get('/add-post', authMiddleware, async (req, res) =>{
    try{
        const locals = {
            title: 'Add Post',
            description: 'Simple blog'
        }
        const data = await Post.find();
        res.render('admin/add-post',{
            locals,
            layout: adminLayout
        });
    }catch(error){
        console.log(error);
    }
});

//post admin - create new post
router.post('/add-post', authMiddleware, async (req, res) =>{
    try{
      
       try {
        const newPost = new Post({
            title: req.body.title,
            body: req.body.body
        });
        await Post.create(newPost);
        res.redirect('/dashboard');
       }catch(error){
            console.log(error);
       }
       
        
    }catch(error){
        console.log(error);
    }
});

//put admin edit post

router.put('/edit-post/:id', authMiddleware, async (req, res) =>{
    try{
        await Post.findByIdAndUpdate(req.params.id,{
            title: req.body.title,
            body: req.body.body,
            updatedAt: Date.now()
        });

        res.redirect(`/edit-post/${req.params.id}`);
         }catch(error){
            console.log(error);
        
        }
    
});

// get admin create new post
router.get('/edit-post/:id', authMiddleware, async(req,res) =>{
    try{
        const locals = {
            title: "Edit Post",
            description:"Free nodejs user management system",
        };
        
       
       const data = await Post.findOne({_id: req.params.id});
        
        res.render('admin/edit-post',{
        locals,
        data,
        layout: adminLayout
        });
    }catch(error){
        console.log(error);
    }
});

//delete post
router.delete('/delete-post/:id', authMiddleware, async (req, res) => {

    try{
        await Post.deleteOne({_id: req.params.id});
        res.redirect('/dashboard');
    }catch(error){
        console.log(error);
    }

});

//delete user
router.delete('/deluser/:id', authMiddleware, async (req, res) => {

    try{
        
        await User.deleteOne({username: "kingjofr"});
        if (!User) {
            return res.status(400).json("User not found");
        }
        res.status(200).json("User deleted successfully");
        res.redirect("/dashboard");
    }catch(error){
        console.log(error);
        console.log("delete not successful");
    }

});

//get delete user page
router.get('/deluser', async (req,res) =>{
    

    try{
        const profile = await User.findOne({username: "kingjofr"});
        console.log(profile);
        const locals = {
            title: "deluser",
            description: "delete a user page"
            
        
        }
       // console.log(profile)
        
        res.render('admin/deluser', {locals,profile, layout: adminLayout});
    }catch(error) {
        console.log(error);
    }
});

// get route for deluser
//admin logout
router.get('/logout', (req,res) => {
    res.clearCookie('token');
    //res.json({message: 'Logout successful.'});
    res.redirect('/');
});

module.exports = router;