let mongoose = require('mongoose');

let blogSchema = mongoose.Schema({
  id: { type: Number },
  title: { type: String },
  description: { type: String },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('Blog', blogSchema);

module.exports = { blogSchema };
