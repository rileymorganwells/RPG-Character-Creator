angular.module('character', [])
.controller('MainCtrl', [
  '$scope','$http',
  function($scope,$http){
    $scope.characters = [];
    $scope.chars = [ { "imagePath": "001-centaur.png" }, { "imagePath": "002-kraken.png" }, { "imagePath": "003-dinosaur.png" }, { "imagePath": "004-tree-1.png" }, { "imagePath": "005-hand.png" }, { "imagePath": "006-echidna.png" }, { "imagePath": "007-robot.png" }, { "imagePath": "008-mushroom.png" }, { "imagePath": "009-harpy.png" }, { "imagePath": "010-phoenix.png" }, { "imagePath": "011-dragon-1.png" }, { "imagePath": "012-devil.png" }, { "imagePath": "013-troll.png" }, { "imagePath": "014-alien.png" }, { "imagePath": "015-minotaur.png" }, { "imagePath": "016-madre-monte.png" }, { "imagePath": "017-satyr.png" }, { "imagePath": "018-karakasakozou.png" }, { "imagePath": "019-pirate.png" }, { "imagePath": "020-werewolf.png" }, { "imagePath": "021-scarecrow.png" }, { "imagePath": "022-valkyrie.png" }, { "imagePath": "023-curupira.png" }, { "imagePath": "024-loch-ness-monster.png" }, { "imagePath": "025-tree.png" }, { "imagePath": "026-cerberus.png" }, { "imagePath": "027-gryphon.png" }, { "imagePath": "028-mermaid.png" }, { "imagePath": "029-vampire.png" }, { "imagePath": "030-goblin.png" }, { "imagePath": "031-yeti.png" }, { "imagePath": "032-leprechaun.png" }, { "imagePath": "033-medusa.png" }, { "imagePath": "034-chimera.png" }, { "imagePath": "035-elf.png" }, { "imagePath": "036-hydra.png" }, { "imagePath": "037-cyclops.png" }, { "imagePath": "038-pegasus.png" }, { "imagePath": "039-narwhal.png" }, { "imagePath": "040-woodcutter.png" }, { "imagePath": "041-zombie.png" }, { "imagePath": "042-dragon.png" }, { "imagePath": "043-frankenstein.png" }, { "imagePath": "044-witch.png" }, { "imagePath": "045-fairy.png" }, { "imagePath": "046-genie.png" }, { "imagePath": "047-pinocchio.png" }, { "imagePath": "048-ghost.png" }, { "imagePath": "049-wizard.png" }, { "imagePath": "050-unicorn.png" } ];
    
    $scope.addCharacter = function() {
      var newcharacter = {characterName:$scope.name,characterImage:$scope.image,stats:0};
      $scope.formContent='';
      $http.post('/characters', newcharacter).success(function(data){
        $scope.characters.push(data);
      });
    };
/*    $scope.upvote = function(comment) {
      return $http.put('/comments/' + comment._id + '/upvote')
        .success(function(data){
          console.log("upvote worked");
          comment.upvotes = data.upvotes;
        });
    };
	$scope.incrementUpvotes = function(comment) {
	  $scope.upvote(comment);
    };*/
    $scope.getAll = function() {
      return $http.get('/characters').success(function(data){
        angular.copy(data, $scope.characters);
      });
    };
    $scope.getAll();
  }
]);
