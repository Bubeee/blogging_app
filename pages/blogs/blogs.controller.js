var mongoose = require('mongoose');
var Blog = mongoose.model('Blog');

function get() {
  return Blog.find().exec().then(function(
    result
  ) {
    var blogs = result;

    return {
      blogs,
      blogsCount: blogs.length
    };
  });
}

function getById(id) {
  return Blog.findOne({ _id: id });
}

function post(blog) {
  var blog = new Blog(blog);

  return blog.save();
}

function put(id, updatedBlog) {
  return Blog.findById(id).then(blog => {
    if (!blog) {
      return null;
    }

    if (updatedBlog.title) {
      blog.title = updatedBlog.title;
    }

    if (updatedBlog.content) {
      blog.content = updatedBlog.content;
    }

    return blog.save();
  });
}

function remove(id) {
  return Blog.findById(id).then(blog => {
    if (!blog) {
      return null;
    }

    return blog.remove();
  });
}

module.exports = {
  get: get,
  getById: getById,
  post: post,
  put: put,
  remove: remove
};
