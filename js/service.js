angular.module("app").service("service", ["$http", "$q", function($http, $q){

    this.getSpecies = () => {
      return $http({
        url:"http://pokeapi.co/api/v2/pokemon-species/torchic/",
        method:"GET"
      });
    };
    this.getNature = () => {
      return $http({
        url:"http://pokeapi.co/api/v2/nature/gentle/",
        method:"GET"
      });
    };
    this.getBerry = () => {
      return $http({
        url:"http://pokeapi.co/api/v2/berry/petaya/",
        method:"GET"
      });
    };
}]);
