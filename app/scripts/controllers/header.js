'use strict';

/**
 * @ngdoc function
 * @name mundiSiteApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the mundiSiteApp
 */
angular.module('mundiSiteApp')
  .controller('HeaderCtrl', ['$location', function ($location) {
    var self = this;

    self.location = $location.path();
  }]);
