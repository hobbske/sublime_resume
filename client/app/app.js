'use strict';

angular.module('sublimeResumeApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider

      // .when('/about', {
      //   templateUrl: 'about/about.html',
      //   controller: 'aboutController'
      // })
      // .when('/work', {
      //   templateUrl: 'work/work.html',
      //   controller: 'workController'
      // })
      // .when('/contact', {
      //   templateUrl: 'contact/contact.html',
      //   controller: 'contactController'
      // })
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });