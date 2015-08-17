'use strict';

describe('Controller: SideMenuCtrl', function () {

  // load the controller's module
  beforeEach(module('sublimeResumeApp'));

  var SideMenuCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SideMenuCtrl = $controller('SideMenuCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
