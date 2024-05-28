const express = require('express');
const router = express.Router();
const landingLayout = "../views/layouts/landingLayout";
const Post = require('../models/Post');
const Card = require('../models/Card');
const bcrypt = require('bcrypt'); // dont store plain text passwords in database
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const uploadCards = require('./insertCardData');
const Counter = require('../models/Counter')
const MergedDeck = require('../models/MergedDeck');
const jwtSecret = process.env.JWT_SECRET;

global.countId = '65c135c702cac41f7abf9a49'