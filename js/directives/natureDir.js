angular.module("app").directive("nature", [function() {
  return {
    templateUrl:"../../views/natureDir.html",
    restrict:"E",
    scope:{},
    controller:["$scope","service",function($scope,service) {
      function getSpecies() {
        service.getSpecies().then(function(result) {
          $scope.name = result.data.name;
        })
      }
      function getNature() {
        service.getNature().then(function(result) {
          console.log(result);
          $scope.nature = result.data.name;
          $scope.preference = result.data.likes_flavor.name;
        })
      }
      getSpecies();
      getNature();
    }],
  };
}]);
