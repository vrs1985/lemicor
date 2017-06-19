angular.module('limonarium.cart', ['ui.router', 'limonarium'])
.config(confCart)
.controller('CartCtrl', CartCtrl);

CartCtrl.$inject = ['$scope', '$localstorage', '$rootScope'];

function CartCtrl($scope, $localstorage, $rootScope) {
      $scope.getOrders = $rootScope.orders;
    $scope.removeOrder = function (index) {
      $rootScope.orders.splice(index, 1);
      $localstorage.setObject('order', $rootScope.orders);
    };

    $scope.viewport = function () {
      var screen = (document.body.clientWidth < 768) ? false : true;
      return screen;
    };

    $scope.totalCost = function () {
      var count = $rootScope.orders.length;
      var total = 0;
      for(var i=0; i<count; i++){
        total += $rootScope.orders[i].price * $rootScope.orders[i].num;
      }
      return total;
    };
    $scope.hash = ($scope.getOrders.length)? 'order' : '';
}

function confCart($stateProvider, $urlRouterProvider) {
      $stateProvider
      .state( 'cart', {
        url: '/cart',
        templateUrl: 'template/cart.html',
        controller: 'CartCtrl'
    });
}