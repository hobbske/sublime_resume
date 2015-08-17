'use strict';

angular.module('sublimeResumeApp')
  .config(function ($stateProvider) {
    $stateProvider
      // .state('about', {
      //   url: '/about',
      //   templateUrl: 'app/about/about.html',
      //   controller: 'AboutCtrl'
      // })
        .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutCtrl'
      });
  });