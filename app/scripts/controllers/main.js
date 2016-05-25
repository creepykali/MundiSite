'use strict';

/**
 * @ngdoc function
 * @name mundiSiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mundiSiteApp
 */
angular.module('mundiSiteApp')
  .controller('MainCtrl', function () {
  	
  	var self = this;


    self.users = [
	    { id: 1, name: 'Bob Marley' },
	    { id: 2, name: 'Alice Cooper' },
	    { id: 3, name: 'Steve Jobs' }
    ];

    self.selectedUser = { id: 1, name: 'Bob Marley' };

  });
