(function () {

  'use strict';

  angular.module('myApp')
    .config(appConfig)
    .run(routeChange);

  appConfig.$inject = ['$routeProvider', '$httpProvider',];
  routeChange.$inject = ['$rootScope', '$location', '$window', 'authService'];


  function appConfig($routeProvider, $httpProvider) {
    $routeProvider
    .when('/', {
      templateUrl: '../views/home.html',
      restricted: true,
      preventLoggedIn: false
    })
    .when('/register',{
      templateUrl: '../registration/register.html',
      controller: 'registerController',
      restricted: false,
      preventLoggedIn: true
    })
    .when('/login', {
      templateUrl: '../login/login.html',
      controller: 'loginController',
      restricted: false,
      preventLoggedIn: true
    })
    .when('/members', {
      templateUrl: '../members/members.html',
      controller: 'membersController',
      restricted: true,
      preventLoggedIn: false
    })
    .when('/logout', {
      restricted: false,
      preventLoggedIn: false,
      resolve: {
        test: function(authService, $rootScope, $location) {
          authService.logout();
          $rootScope.currentUser = authService.getUserInfo();
          $location.path('/');
        }
      }
    })
    .otherwise({redirectTo: '/login'});
    $httpProvider.interceptors.push('authInterceptor');
  }

  function routeChange($rootScope, $location, $window, authService) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
      // if route us restricted and no token is present
      if(next.restricted && !$window.localStorage.getItem('token')) {
        $location.path('/');
      }
      // if token and prevent logging in is true
      if(next.preventLoggedIn && $window.localStorage.getItem('token')) {;
        $location.path('/members');
      }
    });
  }

})();