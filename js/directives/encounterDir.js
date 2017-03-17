angular.module("app").directive("encounter", [function() {

  return {
    templateUrl: "encounterDir.html",
    scope: {

    },
    controller:["$scope", "service", function($scope, service){
      $scope.torchEncounter = service.getEncounter().then(function(result) { return result.data});
    }]
  };

}]);
