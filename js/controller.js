angular.module("app").controller("ctrl", ['$scope',"$state",'service',function($scope, $state, service){

  $scope.torchEncounter = service.getEncounter().then(function(result) {
    console.log(result);
    return result.data
  });

}]);
