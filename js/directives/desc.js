angular.module("app").directive("desc", [function() {
  return {
    templateUrl:"../../views/desc.html",
    restrict:"E",
    scope:{},
    controller:["$scope","service",function($scope,service) {

      function getSpecies() {
        service.getSpecies().then(function(result) {
          $scope.text = result.data.flavor_text_entries[1].flavor_text;
        })
      }
      getSpecies();
    }],
  };
}]);
