'use strict';

angular.module('sublimeResumeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('testimonial', {
        url: '/testimonial',
        templateUrl: 'app/about/testimonial/testimonial.html',
        controller: 'TestimonialCtrl'
      });
  });