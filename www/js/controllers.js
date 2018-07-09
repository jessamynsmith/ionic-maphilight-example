angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('MapsCtrl', function($scope, $timeout) {
  $scope.maps = [
    { title: 'Map 1', id: 1 },
    { title: 'Map 2', id: 2 },
  ];

  $scope.doRefresh = function() {
    $timeout(function() {
      $scope.$broadcast('scroll.refreshComplete');
    }, 500);
  };
})

.controller('MapCtrl', function($scope, $stateParams, $timeout) {
  $scope.mapId = $stateParams.mapId;

  angular.element("#map").maphilight();

  $scope.doRefresh = function() {
    $timeout(function() {
      $scope.$broadcast('scroll.refreshComplete');
    }, 500);
  };
});
