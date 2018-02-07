let mongoose = require('mongoose');

let BlogSchema = mongoose.Schema({
  id: { type: Number },
  title: { type: String },
  description: { type: String },
  // author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

BlogSchema.methods.toJSON = function(){
  return {
    id: this.id,
    title: this.title,
    description: this.description,
    // author: this.author.toProfileJSONFor(user)
  };
};

mongoose.model('Blog', BlogSchema);
