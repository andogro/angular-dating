(function () {

  'use strict';

  angular.module('myApp')
    .service('authService', authService);

  authService.$inject = ['$http', '$window'];

  function authService($http, $window) {
    var user = {};
    return {
      login: function(user) {
        console.log("this is user"+JSON.stringify(user));
        return $http.post('https://galvanize-student-apis.herokuapp.com/gdating/auth/login', user);
      },
      logout: function(user) {
        user = null;
        $window.localStorage.clear();
      },
      register: function(user) {
        user = angular.toJson(user)
        return $http.post('https://galvanize-student-apis.herokuapp.com/gdating/auth/register', user);
      },
      edit: function(user) {
        console.log("this is user"+user);
        return $http.post('https://galvanize-student-apis.herokuapp.com/gdating/members/'+'', user)
      },
      setUserInfo: function(userData) {
        $window.localStorage.setItem('user', JSON.stringify(userData.data.data.user));
        $window.localStorage.setItem('token', JSON.stringify(userData.data.data.token));
      },
      getUserInfo: function(userData) {
        return $window.localStorage.getItem('user');
      },
    };
  }

})();