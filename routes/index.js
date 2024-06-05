var express = require('express');
var router = express.Router();
const userModel = require("./users");
const postModel = require("./posts");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/createuser", async function(req, res){
  
});

module.exports = router;
