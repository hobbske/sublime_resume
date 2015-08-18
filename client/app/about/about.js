'use strict';

angular.module('sublimeResumeApp')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',

      });
      // .state('about.resume', {
      //   url: '/resume',
      //   templateUrl: 'app/about/templates/resume.html',

      // })
      // .state('testimonial', {
      //   url: '/testimonial',
      //   templateUrl: 'app/about/testimonial/testimonial.html',

      // });
  });