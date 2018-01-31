var express = require('express');
var router = express.Router();

let blogsController = require('../pages/blogs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(blogsController)

  res.json(blogsController.get());
});

module.exports = router;
