// stores keywords/passwords in the dot env file to keep those secret. don't upload dotenv file
require('dotenv').config();  

/*Web browsers prevent unknown websites from accessing your application programming 
interfaces and services. This way, your server shares its resources only with 
clients that are on the same domain. However, there are situations where you want 
to lift this guard or get more fine-grained control over which websites access 
your server's resources. In such cases, you implement CORS (cross-origin resource sharing) on your server. */
//const cors=require("cors");  Cors is not in the original Raddy Dev tutorial.I think I put this here because it was a solution to some error on stack overflow

//express makes nodejs easier
const express= require('express');

//layouts for ejs Adds layout support to Express
const expressLayout = require('express-ejs-layouts');

//connects to the mongoose database. connection is actually done in the db.js file in server/config folder
const connectDB = require('./server/config/db');

/*  cookie-parser: This middleware is used to parse cookies that are sent with HTTP requests. 
It allows you to read and write cookies in your route handlers, which can be used for things 
like session management.

cookieParser(secret, options)
Create a new cookie parser middleware function using the given secret and options.

secret a string or array used for signing cookies. This is optional and if not specified, 
will not parse signed cookies. If a string is provided, this is used as the secret. 
If an array is provided, an attempt will be made to unsign the cookie with each secret in order.
options-- an object that is passed to cookie.parse as the second option.
decode a function to decode the value of the cookie

http has header fields. one of these header fields is COOKIE. 
i.e, each request made to the server carries the COOKIE data stored by the browser 
for that particular domain. Once sent, the server needs to parse this cookie data 
and use it to send the appropriate response. And here’s where the catch lies.

Neither node.js’s http interface nor express.js parse the COOKIE field for you. 
They are extremely minimalistic, and you need to do this by yourself. 
That is where cookie-parser comes in. 
It parses the COOKIE header for you and populates req.cookies with an object 
keyed by the cookie names.

*/ 
const cookieParser = require('cookie-parser');

/*  connect-mongo
    https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database
    tutorial on using mongoDB with node.js at above link

  https://meghagarwal.medium.com/storing-sessions-with-connect-mongo-in-mongodb-64d74e3bbd9c
    tutorial on connect-mongo at above link
    What is connect-mongo?  It's a tool for creating sessions with node.js and mongoDB.
    Whats a session?  A session is a way of storing information for a user.  It requires loggin in.
    In the above tutorial connect-mongo is used with express-session

    the general form of using it is

    const oneDay = 1000 * 60 * 60 * 24;
    app.use(session(
    secret: 'SECRET KEY',
    cookie: { maxAge: oneDay },
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI   // your mongoDB url from the mongoDB website when you create a cluster
))                                             mines is stored in the dot.env file so no else can have access to it
*/                                          // dont upload your dot.env file to github
const MongoStore = require('connect-mongo');

/*express-session
        https://medium.com/@zakiazizi1841992/express-js-session-explained-super-easy-with-example-908d8bc4bef9#:~:text=express%2Dsession%20is%20a%20middleware,of%20a%20user%20across%20requests.
        more in depth explanation at the above link

    express-session is a middleware module in Express.js that allows you to create sessions 
    in your web application. It stores session data on the server side, 
    using a variety of different storage options, 
    and allows you to track the activity of a user across requests.

    I leave the following links for more information on sessions and cookies
    https://www.section.io/engineering-education/session-management-in-nodejs-using-expressjs-and-express-session/
    https://www.javatpoint.com/session-vs-cookies

    he copied this straight from the documentation
    app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true }
}))

    interesting notes from the docs
    Note Session data is not saved in the cookie itself, just the session ID. Session data is stored server-side.
    Warning The default server-side session storage, MemoryStore, is purposely not designed for a production environment. 
    It will leak memory under most conditions,
     does not scale past a single process,
     and is meant for debugging and developing.

     So how are we handling storage in this app?
*/
const session = require('express-session');


/*whats bcrypt?
    the npm: https://www.npmjs.com/package/bcrypt
    bcrypt hashes passwords according to this site:https://javascript.plainenglish.io/securely-storing-passwords-using-bcrypt-30efea785728 
    
    hashing functions tend to be a one-way encryption and cannot be “cracked” or un-encrypted. 
    Furthermore, 
    hash functions also make it nearly impossible to create an initial input value that will match the outputted hash string.
    I was thinking ok so when the user logs in it does the hash again to check against the hash stored but it says that it's nearly 
    impossible for the original input to turn into the same output

    but he seems to contradict himself or maybe I'm misunderstanding:
    the password that they provide can be combined with the salt string and then run through the 
    same deterministic hashing function used when the user-created their account 
    to compare whether the hashed version of the entered password

    Bcrypt works both synchronously and asynchronously. However, since password hashing is a CPU-intensive task,
     it is usually better to use bcrypt asynchronously.
     To do this, we will need to add the async flag to the front of our route’s 
    callback function and ensure that we await the response from our hash function before storing the user data.

    The example from the article for register:
    app.post('/register', async(req,res) =>{
        const{name, username, password} = req.body;
        const hash = await bcrypt.hash(password, 10);
        const user = {name, username, password: hash};
        User.push(user); // the article uses an array instead of a database for storing the user
        res.status(201).json(user);
    });

    the example from the article for login:
    app.post('/login', async (req, res) =>{
        const {username, password} = req.body;
        const user = Users.find(user => user.username === username);
        if(!user) return res.status(403).json({message: 'Invalid credentials'});
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) return res.status(403).json({message: 'Invalid credentials})
        res.status(200).json({success: true, user});
    });

    you can find this in the admin.js /register route and /admin route
    In this app raddy dev creates authMiddleware for checking the password instead of creating a /login route

*/
const bcrypt = require('bcrypt'); // dont store plain text passwords in database

/*
    What is jwt? according to this site: https://jwt.io/introduction
    JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and 
    self-contained way for securely transmitting information between parties as a JSON object. 

    JWT is commonly used for Authorization and Information Exchange
    A JWT typically looks like the following: xxxxx.yyyyy.zzzzz

    If you are trying to embed too much information in a JWT token, 
    like by including all the user's permissions, you may need an alternative solution, 
    like Auth0 Fine-Grained Authorization.

    Other alternative solutions to JWT include
    SWT -> Simple Web Tokens
    SAML -> Security Assertion Markup Language Token

    So how do you use this in node.js?
    I found this site: https://codedamn.com/news/nodejs/use-json-web-token-jwt-in-nodejs
    The example from the site:
   // In this function, we create a payload containing the user's ID and email address. 
    Then, we sign the payload using a secret key and set the token to expire in one hour.
    
    function generateAccessToken(user){
        const payload = {
            id: user.id,
            email: user.email
        
        };
        const secret = 'your-secret-key';
        const options = { expiresIn: '1h'};

        return jwt.sign(payload,secret,options);
    }
    
    This looks very different from what Raddy Dev does in this app.  So what does he do exactly and why?

    example from the site to verify:
    function verifyAccessToken(token){
        const secret = 'your-secret-key';

        try{
            const decoded = jwt.verify(token,secret);
            return {success: true, data: decoded};
        } catch(error){
            return {success: false, error: error.message};
        }
    }
    the decoded thing looks familiar
    ah I think I understand now:
    To use JWT in a Node.js application with Express.js, 
    we need to create middleware that checks for the presence of a JWT in the request headers, 
    verifies it, and then proceeds with the request.

    Example from the site:
    function authenticateToken(req,res, next){
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if(!token){
            return res.sendStatus(401);
        }

        const result = verifyAccessToken(token);

        if (!result.success){
            return res.status(403).json({error: result.error});
        }

        req.user = result.data;
        next();
    }

    now how is that function used in a route:
    app.get('/protected', authenticateToken, (req,res) => {
        res.json({ message: 'Welcome to the protected route!', user: req.user });
    });

    I think I understand why it's called middleware now.  Its in the middle between the route and the (req, res)

    I noticed Raddy uses const where in the examples they use function which got me wondering about the difference.
    I found this site: https://dev.to/skinnypetethegiraffe/function-or-const-which-do-you-prefer-typescriptjavascript-apa
    apparently there are several pros and cons to consider 
    const prevents reassignment of the name while function does not.
    Using an arrow function doesn't have it's own lexical context, so it won't have a scoped this and can't be used as a constructor while function can be.
    A const arrow function needs to be declared before calling it, otherwise it's undefined
    A function can be declared after calling it.
    Note you can also do:
    const logWhatever = function( something ) { 
        console.log(something);
        Which both prevents reassignment and creates a lexical context.
*/
const jwt = require('jsonwebtoken');

const methodOverride = require('method-override');

//I haven't figured this one out
const {isActiveRoute} = require('./server/helpers/routeHelpers');
const app = express();
const PORT = process.env.PORT || 5000;

//connect to DB
connectDB();

//app.use(cors());  This is not in the original Raddy Dev/Net Ninja tutorial

/*the following 2 statements are for parsing html
app.use(express.json())
The express. json() function is a middleware function used in Express. js 
applications to parse. It is the process of converting a JSON string to a JSON object for 
data manipulation. incoming JSON data from HTTP requests

a very good link to explain
https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded

When talking about express.json() and express.urlencoded() 
think specifically about POST requests (i.e. the .post request object) 
and PUT Requests (i.e. the .put request object)

You DO NOT NEED express.json() and express.urlencoded() for GET Requests or DELETE Requests.

The extended option allows to choose between parsing the URL-encoded data with 
the query string library (when false) or the qs library (when true). 
The "extended" syntax allows for rich objects and arrays to be encoded into 
the URL-encoded format, allowing for a JSON-like experience with URL-encoded. 
For more information, please see the qs library.
https://www.reddit.com/r/expressjs/comments/up0qe1/why_would_i_use_expressurlencodedextended_false/
*/
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//explained above
app.use(cookieParser());

/* methodOverride is needed because html only supports GET and POST in forms
    but in this application we need to be able to DELETE and update/PUT blog posts.
    now how to use methodOverride. Link to documentation: https://expressjs.com/en/resources/middleware/method-override.html#:~:text=Lets%20you%20use%20HTTP%20verbs,client%20doesn't%20support%20it.
    Looking throught the documentation I see that raddy dev used the the overide using a query value method.

interesting notes
    options.methods
This allows the specification of what methods(s) the request MUST be in in order to check for the method override value. 
This defaults to only POST methods, 
which is the only method the override should arrive in.

This is the form he used in edit-post.ejs
<form action="/delete-post/<%= data._id %>?_method=DELETE" method="POST">

example from docs
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

example from docs
<form method="POST" action="/resource?_method=DELETE">
  <button type="submit">Delete resource</button>
</form>

notes about why we need body parser
NOTE: when using req.body, you must fully parse the request body
//       before you call methodOverride() in your middleware stack,
//       otherwise req.body will not be populated.
app.use(bodyParser.urlencoded())

*/
app.use(methodOverride('_method'));

/*
about session resave attribute
can also create race conditions where a client makes two parallel requests to your server 
and changes made to the session in one request may get overwritten when the other request ends, 
even if it made no changes (this behavior also depends on what store you’re using).
best to change to false but must research for your use case
The best way to know is to check with your store if it implements the touch method. 
If it does, then you can safely set resave: false. 
If it does not implement the touch method and your store sets an expiration date on stored sessions, 
then you likely need resave: true.

about saveUnitialized attribute
Forces a session that is “uninitialized” to be saved to the store. A session is uninitialized when it is new but not modified. 
Choosing false is useful for implementing login sessions, 
reducing server storage usage, 
or complying with laws that require permission before setting a cookie. 
Choosing false will also help with race conditions where a client makes multiple parallel requests without a session.

about The secret
This is the secret used to sign the session ID cookie. 
This can be either a string for a single secret, 
or an array of multiple secrets.
The secret itself should be not easily parsed by a human and would best be a random set of characters. 
A best practice may include:

The use of environment variables to store the secret, ensuring the secret itself does not exist in your repository.
Periodic updates of the secret, while ensuring the previous secret is in the array.

the store is mongo.  When I go to my mongo account I can see the sessions.  But in the code there is no schema for the sessions
like there is for user and post which makes me wonder how does it know how to store the data?  Is there a default that everyone
uses?
*/
app.use(session({  // this 'session' is the express-session part
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({  // 'MongoStore' is the connect-mongo part
        mongoUrl: process.env.MONGODB_URI
    }),
    //cookie: {maxAge: new Date (Date.now() + (3600000))}
    //Date.now() - 30 * 24 * 60 * 60 * 1000
}));

/*
    What is express.static() for:
    https://expressjs.com/en/starter/static-files.html#:~:text=To%20serve%20static%20files%20such,which%20to%20serve%20static%20assets.

    o serve static files such as images, CSS files, and JavaScript files,
     use the express.static built-in middleware function in Express.

    The function signature is: express.static(root, [options])
    so app.use(express.static('public') is for serving files that are in a directory called public.
    app.use('/assets', express.static(__dirname + '/assets')); another example from: https://stackoverflow.com/questions/53002671/what-is-express-static-in-express

*/
app.use(express.static('public'));

// templating engine
/*
    What's app.use() and app.set()?
    https://www.tutorialspoint.com/express-js-app-use-method
    app.use() The app.use() method mounts or puts the specified middleware functions at the specified path. 
    This middleware function will be executed only when the base of the requested path matches the defined path.

    app.set()You can use the express instance to store and retrieve variables. In this case, you can set the title to be "My Site" and retrieve it later with something like

    var title = app.get('title'); from : https://stackoverflow.com/questions/25229129/what-app-set-function-does-express-js
    without the need to declare and keep a global variable messing around.

    The name of the parameter means nothing. You could do

    app.set('jabberwocky', 'correct battery horse staples');

*/
app.use(expressLayout);
app.set('layout', './layouts/main');

app.set('view engine', 'ejs');

app.locals.isActiveRoute = isActiveRoute;

/*
 I see that he made this path '/' equal to two different things.  So how does it konw which one to go to?
*/
app.use('/', require('./server/routes/main'));
app.use('/', require('./server/routes/admin'));

app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`);
});