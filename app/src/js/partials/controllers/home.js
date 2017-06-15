angular.module('limonarium.home', ['ui.router'])
.config(confHome)
.controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = ['$scope', '$rootScope'];

function HomeCtrl($scope, $rootScope) {
  $scope.orders = $rootScope.orders;

  $scope.viewport = function () {
    var screen = (document.body.clientWidth < 768) ? false : true;
    return screen;
  };

  $scope.promoItems = function (products) {
     var promoProducts = [];
      for (var i = 0; i < products.length; i++) {
       if(products[i].promo){
        promoProducts.push(products[i]);
       } }
     return promoProducts;
  }

}


function confHome($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home',{
        url: '/',
        templateUrl: 'template/home.html',
        controller: 'HomeCtrl'
      });
}