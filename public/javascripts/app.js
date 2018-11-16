angular.module('character', [])
.controller('MainCtrl', MainCtrl)
.directive('card', cardDirective);

function MainCtrl ($scope, $http) {
  $scope.characters = [];

  // Get character choices from local json file
  $http.get('images.json').success(function(data) {
   $scope.chars = data;
  });
  
  $scope.addCharacter = function() {
    var newcharacter = {characterName:$scope.name,characterImage:$scope.selectedChar,stats:0};
    $scope.formContent='';
    $http.post('/characters', newcharacter)
    .success(function(data) {
      if (window.location != '/') {
        window.location = '/';
      }
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
  $scope.selectedChar = window.location.search.substring(7);
}

function cardDirective () {
  return {
    scope: {
      character: "="
    },
    restrict: "E",
    replace: "true",
    templateUrl: "../cardDirective.html"
  };
}