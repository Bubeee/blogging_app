var express = require('express');
var router = express.Router();
var auth = require('./auth');

let blogsController = require('../pages/blogs');

router.get('/', auth.required, function(req, res, next) {
  blogsController
    .get()
    .then(result => res.json(result))
    .catch(next);
});

router.get('/:id', auth.required, function(req, res, next) {
  const id = req.params.id;
  blogsController
    .getById(id)
    .then(result => {
      if (!result) {
        res.sendStatus(404);
      } else {
        
      }
    })
    .catch(next);
});

router.post('/', auth.required, function(req, res, next) {
  blogsController
    .post(req.body)
    .then(result => res.json(result))
    .catch(next);
});

router.put('/:id', auth.required, function(req, res, next) {
  const id = req.params.id;
  blogsController
    .put(id, req.body)
    .then(result => {
      if (!result) {
        res.sendStatus(404);
      } else {
        res.json(result);
      }
    })
    .catch(next);
});

router.delete('/:id', auth.required, function(req, res, next) {
  const id = req.params.id;
  blogsController
    .remove(id)
    .then(result => {
      if (!result) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch(next);
});

module.exports = router;
