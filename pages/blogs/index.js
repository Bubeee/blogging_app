let blogsController = require('./blogs.controller')
let blogSchema = require('./blog.schema')

module.exports = {
  get: blogsController.get,
  getById: blogsController.getById,
  post: blogsController.post,
  put: blogsController.put,
  remove: blogsController.remove,

  blogSchema: blogSchema.blogSchema
};
