let mongoose = require('mongoose');
let autoIncrement = require('mongoose-auto-increment');

let BlogSchema = mongoose.Schema({
  _id: { type: Number },
  title: { type: String },
  description: { type: String },
  // author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

BlogSchema.methods.toJSON = function(){
  return {
    _id: this.id,
    title: this.title,
    description: this.description,
    // author: this.author.toProfileJSONFor(user)
  };
};

BlogSchema.plugin(autoIncrement.plugin, 'Blog');

mongoose.model('Blog', BlogSchema);
