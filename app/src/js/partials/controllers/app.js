'use strict'
var limonApp = angular.module('limonarium', [
  'ui.router',
  'limonarium.cart',
  'limonarium.contact',
  'limonarium.catalog',
  'limonarium.home',
  'limonarium.login',
  'limonarium.shipment',
  'limonarium.order',
  'limonarium.detail'
  ])
.config(confApp)
.controller('AppCtrl', AppCtrl);

function confApp($stateProvider, $urlRouterProvider, $locationProvider) {
  // $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise( '/' );
}

limonApp.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '[]');
    }
  }
}]);

limonApp.run(function($rootScope, $localstorage, $browser) {
    var order = $localstorage.getObject('order');
    $rootScope.orders = order;
});

AppCtrl.$inject = ['$scope'];

function AppCtrl($scope) {

}