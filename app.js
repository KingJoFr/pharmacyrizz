require('dotenv').config();
const cors=require("cors");
const express= require('express');
const expressLayout = require('express-ejs-layouts');

const connectDB = require('./server/config/db');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo').default;
const bcrypt = require('bcrypt'); // dont store plain text passwords in database
const jwt = require('jsonwebtoken');
const session = require('express-session');
const methodOverride = require('method-override');


const {isActiveRoute} = require('./server/helpers/routeHelpers');
const app = express();
const PORT = process.env.PORT || 5000;

//connect to DB
connectDB();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method'));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI
    }),
    //cokkie: {maxAge: new Date (Date.now() + (3600000))}
    //Date.now() - 30 * 24 * 60 * 60 * 1000
}));

app.use(express.static('public'));

// templating engine
app.use(expressLayout);
app.set('layout', './layouts/main');

app.set('view engine', 'ejs');

app.locals.isActiveRoute = isActiveRoute;

app.use('/', require('./server/routes/main'));
app.use('/', require('./server/routes/admin'));

app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`);
});