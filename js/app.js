// --save in the terminal working inside npm will install the snippet not globally
// when you have a package.json, list dependencies inthere and npm install will install and list them auto in the package.json file, and
//set up the folder with the installs auto
// npm install will only install stuff from the package.json file listed as values under dependencies property vprsigsfi[fgh[dfoihdfgh[difghidf[gih]]]]
angular.module("app", ["ui.router"]).config(["$stateProvider","$urlRouterProvider",function($stateProvider, $urlRouterProvider) {

  $stateProvider.state("home", {
    url: "",
    template:"<home></home>"
  }).state("encounter",{
    url: "/encounter",
    template:"<encounter></encounter>"
  }).state("nature", {
    url: "/nature",
    // templateUrl:,
  }).state("habitat", {
    url: "/habitat",
    // template:,
  }).state("berries", {
    url: "/berries",
    // template:,
  }).state("flavorText", {
    url: "/flavorText",
    // template:,
  });

}]);
