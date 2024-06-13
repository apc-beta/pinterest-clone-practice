var express = require('express');
var router = express.Router();
const userModel = require("./users");
const postModel = require("./posts");
const localStrategy = require("passport-local");
const passport = require('passport');
passport.use(new localStrategy(userModel.authenticate()));
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get("/login", isLoggedIn, function(req, res){
  res.render('login');
});

router.get("/profile", isLoggedIn, function(req, res){
  res.send("profile");
});



router.post("/register", async function(req, res){
  const userdata = new userModel({
    username: req.body.username,
    email: req.body.email,
    fullname: req.body.fullName
  })

  userModel.register(userdata, req.body.password)
  .then(function(){
    passport.authenticate("local")(req, res, function(){
      res.redirect("/profile");
    })
  })
});

router.post("/login", passport.authenticate("local",{ 
  successRedirect: "/profile",
  failureRedirect: "/"
}), function(req, res){

})

router.get("/logout", function(req,res){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()) return next();
  res.redirect("/");
}
module.exports = router;
