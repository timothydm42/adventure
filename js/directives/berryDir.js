angular.module("app").directive("berry",[function() {
  return {
    templateUrl:"/js/directives/views/berryDir.html",
    restrict:"E",
    scope:{},
    controller:["$scope","service",function($scope,service) {

      var getSpecies = () => {
        service.getSpecies().then(function(result) {
          $scope.name = result.data.name;
        })
      };

      var getBerry = () => {
        service.getBerry().then(function(result) {
          $scope.flavor = result.data.flavors[3].flavor.name;
          $scope.berry = result.data.item.name
        })
      };
      getSpecies();
      getBerry();
    }],
  };
}]);
