'use strict';

/* Controllers */

function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];

function PlanetsideListCtrl($scope, $routeParams, Outfit) {
    
    var outfit = Outfit.get({name : $routeParams.name}, function (data) {   //success
        $scope.outfit = data.outfit_list[0].name;
        $scope.members = data.outfit_list[0].members;
    });
    //console.log(outfit);
    //console.log(outfit.$get());
    //if (outfit.$get({outfit_list:0}).length > 0) {
    //    $scope.outfit = outfit.outfit_list[0].name;
    //    $scope.members = outfit.outfit_list[0].members;
    //}
    
}
PlanetsideListCtrl.$inject = ['$scope', '$routeParams', 'Outfit']

function PlanetsideCharDetailCtrl($scope, $routeParams, Character) {
    var character = Character.get({character_id : $routeParams.characterId}, function (data) {   //success
        $scope.character = data;
    });
}
PlanetsideCharDetailCtrl.$inject = ['$scope', '$routeParams', 'Character']

