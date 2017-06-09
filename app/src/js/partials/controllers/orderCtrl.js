limonApp.controller('limonAppOrderCtrl',
  ['$scope', '$http', '$location', '$rootScope',
  function ($scope, $http, $location, $rootScope) {
    $scope.order = $rootScope.orders;
    $scope.shipment = {
      name: 'Самовывоз'
    };
    $scope.list = [];
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
          $scope.name ='';
          $scope.email = '';
          $scope.phone = '';
          $scope.address = '';
          $scope.additional= '';
        }
      }
  }
]);