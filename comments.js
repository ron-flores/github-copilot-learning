//create web server
var express = require('express');
var router = express.Router();
//import the model
var Comment = require('../models/comment');
var User = require('../models/user');
//import the middleware
var middleware = require('../middleware');

//create a comment
router.post('/campgrounds/:id/comments', middleware.isLoggedIn, function(req, res) {
  //find the campground