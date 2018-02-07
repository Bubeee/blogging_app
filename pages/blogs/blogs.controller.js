var mongoose = require('mongoose');
var Blog = mongoose.model('Blog');

function get() {
  return Promise.all([Blog.find().exec(), Blog.count().exec()])
    .then(function(results) {
      var blogs = results[0];
      var blogsCount = results[1];

      return {
        blogs: blogs.map(function(blog) {
          return blog.toJSON();
        }),
        blogsCount: blogsCount
      };
    });
}

function getById(id) {
  index = blogs.findIndex(obj => obj.id == id);
  return blogs[index];
}

function post(blog) {
  var blog = new Blog(blog);

  // blog.author = user;

  return blog.save().then(function() {
    return { blog: blog.toJSONFor() };
  });
}

function put(id, blog) {
  index = blogs.findIndex(obj => obj.id == id);
  blogs[index] = blog;
}

function remove(id) {
  index = blogs.findIndex(obj => obj.id == id);
  blogs.splice(index, 1);
}

module.exports = {
  get: get,
  getById: getById,
  post: post,
  put: put,
  remove: remove
};
