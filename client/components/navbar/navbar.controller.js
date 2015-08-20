'use strict';

angular.module('sublimeResumeApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
    {
      'title': 'Home',
      'link': '/'
    },

    {
      'title': 'About Me',
      'link': '/about'

    },

    {
      'title': 'Projects',
      'link': '/work'
    },

    {
      'title': 'Contact Me',
      'link': '/contact'
    }

    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });