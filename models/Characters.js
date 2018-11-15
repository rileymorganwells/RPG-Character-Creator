var mongoose = require('mongoose');
var CharacterSchema = new mongoose.Schema({
  characterName: String,
  characterImage: String,
  stats: {type: Number, default: 0},
});

//CommentSchema.methods.upvote = function(cb) {
//  this.upvotes += 1;
//  this.save(cb);
//};

mongoose.model('Character', CharacterSchema);
