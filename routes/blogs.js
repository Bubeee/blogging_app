var express = require('express');
var router = express.Router();

let blogsController = require('../pages/blogs');

router.get('/', function(req, res, next) {
  blogsController
    .get()
    .then(result => res.json(result))
    .catch(next);
});

router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  blogsController
    .getById(id)
    .then(result => {
      if (!result) {
        res.sendStatus(404);
      } else {
        res.json(result);
      }
    })
    .catch(next);
});

router.post('/', function(req, res, next) {
  blogsController
    .post(req.body)
    .then(result => res.json(result))
    .catch(next);
});

router.put('/:id', function(req, res, next) {
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

router.delete('/:id', function(req, res, next) {
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
