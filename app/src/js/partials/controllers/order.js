angular.module('limonarium.order',  ['ui.router', 'limonarium'])
.config(confOrder)
.controller('OrderCtrl', OrderCtrl);

OrderCtrl.$inject = ['$scope', '$http', '$location', '$rootScope', '$localstorage'];

function OrderCtrl($scope, $http, $location, $rootScope, $localstorage) {
    $scope.order = $rootScope.orders;
    $scope.shipment = {
      name: 'Самовывоз'
    };

    $scope.list = [];

    $scope.my = { sent: false };

    $scope.submit = function () {
      if($scope.name && $scope.email && $scope.phone && $scope.address){
        var customer = {
          data: new Date().toLocaleString(),
          name: this.name,
          email: this.email,
          phone: this.phone,
          address: this.address,
          additional: this.additional
        }
        $scope.list.push(customer);
        // $http.post( 'order.php', { 'userInfo': customer, 'orderInfo':  $scope.order})
        // .success(function (data, status, headers, config){
        //   $scope.message = data;
        // }).error( function (data, status, headers, config) {
        //   $scope.message = status;
        // } );
        $scope.thanks = 'Спасибо! Ваш заказ принят в обработку';
        $scope.my.sent = true;
        $scope.name ='';
        $scope.email = '';
        $scope.phone = '';
        $scope.address = '';
        $scope.additional= '';
        $rootScope.orders = [];
        $localstorage.setObject('order', []);
      }
    }
}

function confOrder($stateProvider, $urlRouterProvider) {
      $stateProvider
      .state('order', {
        url: '/order',
        templateUrl: 'template/order.html',
        controller: 'OrderCtrl'
      });
}