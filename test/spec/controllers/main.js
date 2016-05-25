'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('mundiSiteApp'));

  var MainCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl');
  }));

  it('', function () {});
});
