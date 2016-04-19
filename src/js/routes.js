app.config(function($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'loginController'
    })
    .when('/register', {
      templateUrl: 'views/register.html',
      controller: 'registerController'
    })
    .when('/members', {
      templateUrl: 'views/members.html',
      controller: 'membersController'
    })
    .otherwise('/');
});