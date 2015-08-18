'use strict';

angular.module('sublimeResumeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('resume', {
        url: '/resume',
        templateUrl: 'app/about/resume/resume.html',
        controller: 'ResumeCtrl'
      });
  });