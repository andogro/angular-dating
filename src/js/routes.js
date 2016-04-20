app.config(function($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: '../login/login.html',
      controller: 'loginController'
    })
    .when('/', {
      templateUrl: '../views/home.html',
    }) 
    .when('/register', {
      templateUrl: '../registration/register.html',
      controller: 'registerController'
    })
    .when('/members', {
      templateUrl: '../members/members.html',
      controller: 'membersController'
    })
    .otherwise('/');
});

