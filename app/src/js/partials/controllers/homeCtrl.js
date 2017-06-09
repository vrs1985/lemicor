limonApp.controller('limonAppCtrl',
  ['$scope', '$http', '$location', '$rootScope',
  function ($scope, $http, $location, $rootScope) {
    $scope.orders = $rootScope.orders;

    $scope.selectPromo = function (item) {
      return item.promo;
    };

  }
]);