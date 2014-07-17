angular.module('parser',[])
.controller('parserController', ['$scope', function($scope){
  $scope.charAt = -1;

  $scope.hai = function(){
    $scope.parsed = JSON.stringify({
      title:$scope.title,
      author:$scope.author,
      content:$scope.content
    });
  };
}]);
