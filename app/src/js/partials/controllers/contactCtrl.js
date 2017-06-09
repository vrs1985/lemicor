limonApp.controller('limonAppContactCtrl',
  ['$scope', '$http', '$location',
  function ($scope, $http, $location) {

    $scope.query = function (txt, isValid) {
      if(isValid){
        if(angular.isDefined(txt) &&
        angular.isDefined(txt.name)&&
        angular.isDefined(txt.phone)&&
        angular.isDefined(txt.email)&&
        angular.isDefined(txt.msg)){
        console.log(txt);
      } }else{
        $scope.message = 'Error';
        $scope.showError = true;
      }
    };

    $scope.getError = function (error) {
      if(angular.isDefined(error)){
        if(error.required){
          return "Поле не должно быть пустым";
        }else if(error.email){
          return "Введите правильный email";
        }
      }
    };

  }
]);