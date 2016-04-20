app.config(function($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: '../registration/views/login.html',
      controller: 'loginController'
    })
    .when('/', {
      templateUrl: '../views/home.html',
    }) 
    .when('/register', {
      templateUrl: '../registration/views/register.html',
      controller: 'registerController'
    })
    .when('/members', {
      templateUrl: '../members/views/members.html',
      controller: 'membersController'
    })
    .otherwise('/');
});

