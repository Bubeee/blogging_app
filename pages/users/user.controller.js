var mongoose = require('mongoose');
var User = mongoose.model('User');

function get() {
  return Promise.all([Blog.find().exec(), Blog.count().exec()]).then(function(
    results
  ) {
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
  return Blog.findOne({ _id: id })
    .then(function(blog) {
      if (!blog) {
        return null;
      }

      return { blog: blog.toJSON() };
    });
}

function post(newUser) {
  var user = new User();

  user.username = newUser.username;
  user.email = newUser.email;
  user.setPassword(newUser.password);

  user
    .save()
    .then(function() {
      return { user: user.toAuthJSON() };
    });
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

    return blog.save().then(function(saved) {
      return { blog: saved.toJSON() };
    });
  });
}

function remove(id) {
  return Blog.findById(id).then(blog => {
    if (!blog) {
      return null;
    }

    return blog.remove().then(function(saved) {
      return { blog: saved.toJSON() };
    });
  });
}

module.exports = {
  get: get,
  getById: getById,
  post: post,
  put: put,
  remove: remove
};
