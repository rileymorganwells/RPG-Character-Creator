angular.module('character', [])
.controller('MainCtrl', [
  '$scope','$http',
  function($scope,$http){
    $scope.characters = [];
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
