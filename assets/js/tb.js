var angular = require('angular'),
  route = require('angular-route'),
  controllers = require('./controllers'),
  tb;

tb = angular.module('tb', [
  'ngRoute',
  'tb.controllers'
]);

tb.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/conflict.html',
        controller: 'ConflictCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);
