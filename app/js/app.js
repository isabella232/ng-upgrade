'use strict';

angular
  .module('phoneApp', [
    'ngRoute'
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/phone-list.tpl.html',
        controller: 'PhoneListController'
      })
      .when('/phone/:fileId', {
        templateUrl: 'js/phone.tpl.html',
        controller: 'PhoneController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
