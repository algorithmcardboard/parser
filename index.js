angular.module('parser',[])
.controller('parserController', ['$scope', function($scope){
  $scope.hai = function(){
    var regExp = new RegExp($scope.content.charAt($scope.charAt), "g");
    var escaped = $scope.content.replace(regExp, "\\n");
    console.log('escaped is ', escaped);
    $scope.parsed = JSON.stringify({
      content:escaped
    });
  };
}]);
