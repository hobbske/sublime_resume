'use strict';

angular.module('sublimeResumeApp')
    .controller('MainCtrl', function ($scope, $location) {
        $scope.aboutMe = true;
        $scope.toggle1 = function() {
            $scope.aboutMe = !$scope.aboutMe;
        }

        $scope.works = true;
        $scope.toggle2 = function() {
            $scope.works = !$scope.works;
        }

        $scope.go = function(path) {
        $location.path(path);

        }



    });

    // .controller('MyhomeCtrl', function($scope,$location) {  });
    // .controller('MyaboutCtrl', function($scope,$location) {  });
    // .controller('MyworkCtrl', function($scope,$location) {  });
    // .controller('MycontactCtrl', function($scope,$location) {  });

    // .config(function($routeProvider) {
    //     $routeProvider.
    //       when('/', {controller:'MyhomeCtrl', templateUrl:'main.html'}).
    //       when('/about', {controller:'MyaboutCtrl', templateUrl:'about.html'}).
    //       when('/work', {controller:'MyworkCtrl', templateUrl:'work.html'}).
    //       when('/contact', {controller:'MycontactCtrl', templateUrl:'contact.html'}).
    //       otherwise({redirectTo:'/'});
    //   });
    // .run(function($rootScope) {
    //    $rootScope.$on('$routeChangeSuccess', function(ev,data) {
    //      if (data.$route && data.$route.controller)
    //        $rootScope.controller = data.$route.controller;
    //    })





    // });
