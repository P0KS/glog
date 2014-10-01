var glog = angular.module('glog',[
    'ngRoute',
    'glogControllers',
    'ui.bootstrap'
]);

glog.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/flightsheet.html',
        controller: 'FlightSheetController',
      }).
      when('/pilots', {
        templateUrl: 'views/pilots.html',
        controller: 'PilotsController',
      }).
      when('/aircraft', {
        templateUrl: 'views/aircraft.html',
        controller: 'AircraftController',
      }).
      when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsController',
      });
  }]);
