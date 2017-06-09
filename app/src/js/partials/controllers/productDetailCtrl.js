limonApp.controller('limonAppProductDetailCtrl',
  ['$scope', '$http', '$location', '$routeParams',
  function ($scope, $http, $location, $routeParams) {
    var that = this;
    that.picture = [];
    $scope.id = $routeParams.id;
    var url = '../json/' + $routeParams.id + '.json';

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
]);