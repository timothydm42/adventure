angular.module("app").directive("encounter", [function() {
  return {
    templateUrl:"./views/encounterDir.html",
    restrict:"E",
    scope:{},
    controller:["$scope","service",function($scope,service) {

      function getSpecies() {
        service.getSpecies().then(function(result) {
          $scope.habitat = result.data.habitat.name;
          $scope.name = result.data.name;
        })
      }
      getSpecies();

    }],
  };
}]);
