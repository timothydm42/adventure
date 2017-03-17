angular.module("app").service("service", ["$http", "$q", function($http, $q){

    this.getSpecies = function() {
      return $http({
        url:"http://pokeapi.co/api/v2/pokemon-species/torchic/",
        method:"GET"
      });
    };

    this.getEncounter = function() {
      return $http({
        url:"http://pokeapi.co/api/v2/encounter-method/1/",
        method:"GET"
      });
    }

}]);
