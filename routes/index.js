var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Character = mongoose.model('Character');
var path = require('path');

router.get('/characters', function(req, res, next) {
  Character.find(function(err, characters){
    if(err){ return next(err); }
    res.json(characters);
  });
});

router.get('/pickCharacter', function(req, res, next) {
  res.sendFile(path.resolve('public/characters.html'));
});

router.get('/create/:charID', function(req, res, next) {
  res.sendFile(path.resolve('public/create.html'));
});

router.post('/create/:charID?', function(req, res, next) {
  var character = new Character(req.body);
  character.save(function(err, comment) {
    if(err){ return next(err); }
    res.sendFile(path.resolve('public/create.html'));
  });
});

router.post('/characters', function(req, res, next) {
  var character = new Character(req.body);
  character.save(function(err, comment){
    if(err){ return next(err); }
    res.json(comment);
  });
});

router.delete('/characters', function (req, res) {
    Character.find().remove(function (err, user) {
        if (err) return res.send(err);
        res.json({ message: 'Deleted' });
    });
});

module.exports = router;