'use strict';

angular.module('sublimeResumeApp')
  .controller('WorkCtrl', function ($scope, $location) {
    $scope.hoverInT = function(){
        this.hoverEditT = true;
    };

    $scope.hoverOutT = function(){
        this.hoverEditT = false;
    };
    $scope.hoverInW = function(){
        this.hoverEditW = true;
    };

    $scope.hoverOutW = function(){
        this.hoverEditW = false;
    };
    $scope.hoverInD = function(){
        this.hoverEditD = true;
    };

    $scope.hoverOutD = function(){
        this.hoverEditD = false;
    };

    $scope.goTennis = function() {
        $location.url('https://tennisgroup.herokuapp.com');
    };
    $scope.goDraft = function() {
        $location.url('https://draft-assist.herokuapp.com');
    };
    $scope.goWork = function() {
        $location.url('https://tennisgroup.herokuapp.com');
    };

  });
