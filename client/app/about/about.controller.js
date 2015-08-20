'use strict';

angular.module('sublimeResumeApp')
  .controller('AboutCtrl', function ($scope) {

    $scope.hoverInDt = function(){
        this.hoverEditDt = true;
    };

    $scope.hoverOutDt = function(){
        this.hoverEditDt = false;
    };

  });
