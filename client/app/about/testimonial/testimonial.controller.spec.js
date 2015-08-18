'use strict';

describe('Controller: TestimonialCtrl', function () {

  // load the controller's module
  beforeEach(module('sublimeResumeApp'));

  var TestimonialCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestimonialCtrl = $controller('TestimonialCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
