'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: MyCtrl1});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: MyCtrl2});
    $routeProvider.when('/ps2/outfit/', {templateUrl: 'partials/member-list.html', controller: PlanetsideListCtrl});
    $routeProvider.when('/ps2/outfit/:name', {templateUrl: 'partials/member-list.html', controller: PlanetsideListCtrl});
    $routeProvider.when('/ps2/character/:characterId', {templateUrl: 'partials/character-detail.html', controller: PlanetsideCharDetailCtrl});
    $routeProvider.otherwise({redirectTo: '/ps2/outfit'});
  }]);
