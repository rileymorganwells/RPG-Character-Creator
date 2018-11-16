var mongoose = require('mongoose');
var CharacterSchema = new mongoose.Schema({
  characterName: String,
  characterImage: String,
  stats: {type: Number, default: 0},
});

mongoose.model('Character', CharacterSchema);
