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
    $scope.hash = ($scope.getOrders.length)? '#/order' : '';

  }
]);