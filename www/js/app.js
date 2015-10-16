// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic','ionic.service.core', 'ngSanitize', 'btford.socket-io'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    Ionic.io(); 

    // this will give you a fresh user or the previously saved 'current user'
    var user = Ionic.User.current();
    console.log(user);
    // if the user doesn't have an id, you'll need to give it one.
    if (!user.id) {
      console.log('user has no id');
      user.id = Ionic.User.anonymousId();
      //persist the user
      user.save();
      // user.id = 'your-custom-user-id';
    }


    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('patient', {
        url: "/patient/:name",
        templateUrl: "templates/patient.html"
  })
  .state('nurse', {
        url: "/nurse/:name",
        templateUrl: "templates/nurse.html"
  })
  .state('login', {
    url: "/login",
    templateUrl: "templates/login.html"
  });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/login');

});
