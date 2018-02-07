let mongoose = require('mongoose');
let autoIncrement = require('mongoose-auto-increment');

let BlogSchema = mongoose.Schema({
  _id: { type: Number },
  title: { type: String },
  content: { type: String },
  // author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

BlogSchema.plugin(autoIncrement.plugin, 'Blog');

mongoose.model('Blog', BlogSchema);
