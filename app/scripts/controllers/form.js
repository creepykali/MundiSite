'use strict';

/**
 * @ngdoc function
 * @name mundiSiteApp.controller:FormCtrl
 * @description
 * # FormCtrl
 * Controller of the mundiSiteApp
 */
angular.module('mundiSiteApp')
  .controller('FormCtrl', [function () {
    
    var self = this;


    self.users = [
	    { id: 1, name: 'Menos de 500' },
	    { id: 2, name: 'De 500 até 1.000' },
	    { id: 3, name: 'De 1.000 até 2.500' },
		{ id: 4, name: 'De 2.500 até 5.000' },
		{ id: 5, name: 'De 5.000 até 10.000' },
		{ id: 6, name: 'De 10.000 até 20.000' },
		{ id: 7, name: 'Mais de 20.000' },
		{ id: 8, name: 'Ainda não possuo transações' },
    ];

    self.selectedUser = { id: 1, name: 'Menos de 500' };
  }]);
