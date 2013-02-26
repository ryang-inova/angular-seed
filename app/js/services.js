'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');

angular.module('myApp.services', ['ngResource']).
    factory('Outfit', function($resource){
        return $resource('http://census.soe.com/get/ps2-beta/outfit/',
                         {callback: 'JSON_CALLBACK'},
                         {get: {method: 'JSONP', params:{ 'name': 'Virtual Hitmen' ,'c:resolve':'member_character(name,type.faction)'}, isArray: false}});
    });
    
