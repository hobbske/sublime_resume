'use strict';

angular.module('sublimeResumeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.aboutMe = true;
    $scope.toggle1 = function() {
        $scope.aboutMe = !$scope.aboutMe;
    }

    $scope.works = true;
    $scope.toggle2 = function() {
        $scope.works = !$scope.works;
    }

  });
