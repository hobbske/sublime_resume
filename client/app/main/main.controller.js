'use strict';

angular.module('sublimeResumeApp')
    .controller('MainCtrl', function ($scope, $location) {

        $scope.home = true;
        $scope.toggle3 = function() {
            $scope.home = !$scope.home;
        };

        $scope.aboutMe = true;
        $scope.toggle1 = function() {
            $scope.aboutMe = !$scope.aboutMe;

        };

        $scope.works = true;
        $scope.toggle2 = function() {
            $scope.projects = !$scope.projects;
        };

        $scope.contact = true;
        $scope.toggle4 = function() {
            $scope.contact = !$scope.contact;
        };

        $scope.go = function(path) {
        $location.path(path);

        };


    });