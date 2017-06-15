angular.module('limonarium.login', ['ui.router'])
.config(confLogin)
.controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['$scope'];

function LoginCtrl($scope) {

}

function confLogin($stateProvider, $urlRouterProvider) {
  $stateProvider
        .state('admin', {
          url: '/admin',
          templateUrl: 'template/login.html',
          controller: 'LoginCtrl'
        });
}
