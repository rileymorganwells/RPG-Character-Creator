angular.module('character', [])
.controller('MainCtrl', MainCtrl);

function MainCtrl ($scope, $http) {
  $scope.characters = [];

  $scope.addCharacter = function() {
    var newcharacter = {characterName:$scope.name,characterImage:$scope.image,stats:0};
    $scope.formContent='';
    $http.post('/characters', newcharacter)
    .success(function(data) {
      $scope.characters.push(data);
    });
  };

  $scope.deleteCharacters = function() {
    $http.delete('/characters')
    .success(function(data) {
      console.log("In deletion success");
      $scope.getAll();
    });
  }

  $scope.getAll = function() {
    return $http.get('/characters').success(function(data){
      angular.copy(data, $scope.characters);
    });
  };

  // On page load
  $scope.getAll();
}