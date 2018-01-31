var express = require('express');
var router = express.Router();

let blogsController = require('../pages/blogs');

router.get('/', function(req, res, next) {
  res.json(blogsController.get());
});

router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  res.json(blogsController.getById(id));
});

router.post('/', function(req, res, next) {
  res.json(blogsController.post(req.body));
});

router.put('/:id', function(req, res, next) {
  const id = req.params.id;
  res.json(blogsController.put(id, req.body));
});

router.delete('/:id', function(req, res, next) {
  const id = req.params.id;
  res.json(blogsController.remove(id));
});

module.exports = router;
