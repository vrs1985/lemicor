'use strict'
var limonApp = angular.module('limonarium', ['ngRoute']);

limonApp.config(['$routeProvider', '$locationProvider',
 function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
      .when('/',{
        templateUrl: 'template/home.html',
        controller: 'limonAppCtrl'
      })
      .when('/catalog',{
        templateUrl: 'template/catalog.html',
        controller: 'limonAppProductCtrl'
      })
      .when('/shipment',{
        templateUrl: 'template/shipment.html',
        controller: 'limonAppShipmentCtrl'
      })
      .when('/contact',{
        templateUrl: 'template/contact.html',
        controller: 'limonAppContactCtrl'
      })
      .when('/cart',{
        templateUrl: 'template/cart.html',
        controller: 'limonAppCartCtrl'
      })
      .when('/admin',{
        templateUrl: 'template/login.html',
        controller: 'limonAppLoginCtrl'
      })
      .when('/product-details/:id',{
        templateUrl: 'template/product-detail.html',
        controller: 'limonAppProductDetailCtrl'
      })
      .when('/order',{
        templateUrl: 'template/order.html',
        controller: 'limonAppOrderCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

]);

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
    $browser.baseHref = function () { return "/" };
    var order = $localstorage.getObject('order');
    $rootScope.orders = order;
});

