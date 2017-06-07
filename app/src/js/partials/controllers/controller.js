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
      .when('/products-details/:product_id',{
        templateUrl: 'template/product-detail.html',
        controller: 'limonAppProductDetailCtrl'
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


limonApp.run(function($rootScope, $localstorage) {
    var order = $localstorage.getObject('order');
    $rootScope.orders = order;
});

limonApp.controller('limonAppProductCtrl',
  ['$scope', '$http', '$location', '$localstorage', '$rootScope',
  function ($scope, $http, $location, $localstorage, $rootScope ) {
      $http.get("../json/product.json")
      .then(function (response) {$scope.products = response.data.records;});

      $scope.prodCount = function (e) {
        var style = (e < 10 && e > 0) ? true : false;
        return style;
      };
      $scope.prodEmpty = function (e) {
        var style = (e < 1) ? true : false;
        return style;
      };

      $scope.addOrder = function (id, name, price, num) {
        var order = {},
         newOrder = [];
        order = {
          'id' : id,
          'name' : name,
          'price' : price,
          'num' : num
        };
        newOrder = $rootScope.orders;
        newOrder.push(order);
        $rootScope.orders = newOrder;
        $localstorage.setObject('order', newOrder);
      };

      $scope.productNum = 1;
  }
]);

limonApp.controller('limonAppCtrl',
  ['$scope', '$http', '$location', '$rootScope',
  function ($scope, $http, $location, $rootScope) {
    $scope.orders = $rootScope.orders;
  }
]);

limonApp.controller('limonAppShipmentCtrl',
  ['$scope', '$http', '$location',
  function ($scope, $http, $location) {

  }
]);

limonApp.controller('limonAppContactCtrl',
  ['$scope', '$http', '$location',
  function ($scope, $http, $location) {

  }
]);

limonApp.controller('limonAppCartCtrl',
  ['$scope', '$http', '$location', '$rootScope', '$localstorage',
  function ($scope, $http, $location, $rootScope, $localstorage) {

    $scope.getOrders = $rootScope.orders;
    $scope.removeOrder = function (index) {
      $rootScope.orders.splice(index, 1);
      $localstorage.setObject('order', $rootScope.orders);
    };
    $scope.totalCost = function () {
      var count = $rootScope.orders.length;
      var total = 0;
      for(var i=0; i<count; i++){
        total += $rootScope.orders[i].price * $rootScope.orders[i].num;
      }
      return total;
    };

  }
]);

limonApp.controller('limonAppProductDetailCtrl',
  ['$scope', '$http', '$location', '$routeParams',
  function ($scope, $http, $location, $routeParams) {
    $scope.product_id = $routeParams.product_id;
    var url = '../json/' + $routeParams.product_id + '.json';

    $http.get(url).then(function(response) {
      $scope.product = response.data;
    });

  }
]);

// limonApp.component("catalog", {
//   templateUrl: "catalog.html",
//   controller:
// });