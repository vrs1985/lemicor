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

      $scope.like = function () {
        console.log('like + 1');
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