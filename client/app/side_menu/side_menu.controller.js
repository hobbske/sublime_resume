'use strict';

angular.module('sublimeResumeApp');

//     .run(function($rootScope) {
//     document.addEventListener("keyup", function(e) {
//         if (e.keyCode === 27)
//             $rootScope.$broadcast("escapePressed", e.target);
//     });

//     document.addEventListener("click", function(e) {
//         $rootScope.$broadcast("documentClicked", e.target);
//     });
// });

//     .controller('SideMenuCtrl', function ($scope, $rootScope) {
//         $scope.leftVisible = false;
//         $scope.rightVisible = false;

//     $scope.close = function() {
//         $scope.leftVisible = false;
//         $scope.rightVisible = false;
//     };

//     $scope.showLeft = function(e) {
//         $scope.leftVisible = true;
//         e.stopPropagation();
//     };

//     $scope.showRight = function(e) {
//         $scope.rightVisible = true;
//         e.stopPropagation();
//     }

//     $rootScope.$on("documentClicked", _close);
//     $rootScope.$on("escapePressed", _close);

//     function _close() {
//         $scope.$apply(function() {
//             $scope.close();
//         });
//     }
// });