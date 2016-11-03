angular.module("app").controller("ctrl", function($scope, service){
   
    $scope.thisappisbroken = "This app is working";

    $scope.germData = service.getGerms();

    $scope.func = (v,i) => v+i;

    
    $scope.func2 = (v,i) => v+i;
    
});