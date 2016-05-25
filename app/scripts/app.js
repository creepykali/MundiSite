'use strict';

/**
 * @ngdoc overview
 * @name mundiSiteApp
 * @description
 * # mundiSiteApp
 *
 * Main module of the application.
 */
angular
  .module('mundiSiteApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl as mainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
