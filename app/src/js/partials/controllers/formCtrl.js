
limonApp.controller("sendFormCtrl", ['$scope', function ($scope) {
  $scope.send = function (message, isValid) {
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
    if(angular.isDefined(error)){ console.log(error);
      if(error.required){
        return "Поле не должно быть пустым";
      }else if(error.email){
        return "Введите правильный email";
      }
    }
  };

}]);