angular.module("app").service("service", ["$http", "$q", function($http, $q){

    this.getEncounter = function() {
      return $http({
        url:"http://pokeapi.co/api/v2/encounter-method/1/",
        method:"GET"
      });
    }

}]);
