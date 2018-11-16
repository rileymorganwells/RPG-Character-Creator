var mongoose = require('mongoose');
var CharacterSchema = new mongoose.Schema({
  characterName: String,
  characterImage: String,
  characterTagline: String,
  characterType: String,
  def: {type: Number, default: 50},
  att: {type: Number, default: 50},
  hp: {type: Number, default: 50},
  mag: {type: Number, default: 50},
  ranged: {type: Number, default: 50},
  weakness: String,
});

mongoose.model('Character', CharacterSchema);
