angular.module('limonarium.shipment', ['ui.router'])
.config(confShipment)
.controller('ShipmentCtrl', ShipmentCtrl);

ShipmentCtrl.$inject = ['$scope'];

function ShipmentCtrl($scope) {

}

function confShipment($stateProvider, $urlRouterProvider) {
  $stateProvider
        .state('shipment', {
          url: '/shipment',
          templateUrl: 'template/shipment.html',
          controller: 'ShipmentCtrl'
        });
}