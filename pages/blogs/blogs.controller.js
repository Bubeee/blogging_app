let blog = require('./blog');

class BlogsController {
  constructor() {}

  static get() {
    return new blog.Blog(1, 'Cool blog', 'some content', 1);
  }

  static getById(id) {}

  static post(blog) {}

  static put(blog) {}

  static delete() {}
}

module.exports = {
  get: BlogsController.get,
  getById: BlogsController.getById,
  post: BlogsController.post,
  put: BlogsController.put,
  delete: BlogsController.delete
};
