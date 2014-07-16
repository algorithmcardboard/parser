angular.module('parser',[])
.controller('parserController', ['$scope', function($scope){
  $scope.charAt = -1;

  $scope.hai = function(){
    if($scope.charAt === -1){
      $scope.parsed = "Incorrect index value.  It cannot be -1";
      return;
    }
    var regExp = new RegExp($scope.content.charAt($scope.charAt), "g");
    var escaped = $scope.content.replace(regExp, "\\n");
    console.log('escaped is ', escaped);
    $scope.parsed = JSON.stringify({
      content:escaped
    });
  };
}]);
