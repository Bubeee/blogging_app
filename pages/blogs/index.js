let blogsController = require('./blogs.controller')
let blog = require('./blog')

module.exports = {
  get: blogsController.get,
  getById: blogsController.getById,
  post: blogsController.post,
  put: blogsController.put,
  remove: blogsController.remove
};
