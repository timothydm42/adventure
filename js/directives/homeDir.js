
angular.module("app").directive("home", [function() {

  return {
    templateUrl: "./views/homeDir.html",
    restrict: "E",
    scope: {},
    controller: ["$scope", "service", function($scope, service) {


      // function getSpecies() {
      //   service.getSpecies().then(function(result) {
      //     console.log(result);
      //     $scope.species = result.data.flavor_text_entries[1].flavor_text;
      //   })
      // }
      // getSpecies();

    }],
  };

}]);
