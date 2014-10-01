var glogControllers = angular.module('glogControllers', []);

glogControllers.controller('HeaderController', function($scope, $location){
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
});

glogControllers.controller('ClockController', function($scope, $timeout){
    
    $scope.currentDate = new Date();
    
    $scope.clock = "Loading timer..."; // initialise the time variable
    $scope.tickInterval = 1000 //ms

    var tick = function() {
        $scope.clock = Date.now() // get the current time
        $timeout(tick, $scope.tickInterval); // reset the timer
    }
    // Start the timer
    $timeout(tick, $scope.tickInterval);
});

glogControllers.controller('FlightSheetController', function ($scope) {
    
});

glogControllers.controller('PilotsController', function ($scope) {
    
});

glogControllers.controller('AircraftController', function ($scope) {
    
});

glogControllers.controller('SettingsController', function ($scope) {
   
});