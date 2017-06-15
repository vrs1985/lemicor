angular.module('limonarium.detail', ['ui.router', 'limonarium'])
.config(confDetail)
.controller('DetailCtrl', DetailCtrl);

DetailCtrl.$inject = ['$scope', '$http', '$location', '$stateParams'];

function DetailCtrl($scope, $http, $location, $stateParams) {
  var that = this;
    that.picture = [];
    $scope.article = $stateParams.productId;
    var url = '../json/' + $scope.article + '.json';

    $http.get(url).then(function(response) {
      $scope.product = response.data;
      return that.picture = response.data.picture;
    });

  $scope.template = function () {
    return "img/products/" + that.picture[$scope.number];
  };

  $scope.number = 0;

  $scope.slide = function (count) {
    if(count === 'next'){
    if($scope.number === that.picture.length-1 ){ $scope.number = 0; return; }
     $scope.number++;
     console.log($scope.number);
    }else if('prev'){
     if($scope.number === 0){ $scope.number = that.picture.length-1; return; }
     $scope.number--;
     console.log($scope.number);
    }
  };
}

function confDetail($stateProvider, $urlRouterProvider) {
      $stateProvider
      .state('details', {
        url: '/product/code/:productId',
        templateUrl: 'template/product.detail.html',
        controller: 'DetailCtrl'
      });
}