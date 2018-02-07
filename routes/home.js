var router = require('express').Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Blogging application by Valodzya' });
});

module.exports = router;