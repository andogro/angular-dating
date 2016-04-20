angular.module('sample.signup', [
  'ui-router',
  'angular-storage'
  ])
  .config(function($stateProvider) {
    $stateProvider.state('signup', {
      url:'/signup',
      controller: 'SignupCtrl',
      templateUrl: 'signup/signup.html'
    });
  })
  .controller ('SignupCtrl', function SignupController( $scope, $http, store) {
    
    $scope.signup = function() {
      $http({
        url: 'http://localhost:3001/users',
        method: 'Post'
      }).then(function (response) {
      store.set('jwt', response.data.id_token);
      }, function() {
      alert(response.data)
      })
    }

    $scope.callAnonymousApi = function() {
      callApi('Anonymous', 'http://localhost:3001/api/random-quote')
    }

    $scope.callAnonymousApi = function() {
      callApi('Anonymous', 'http://localhost:3001/api/random-quote')
    }

    function callApi(type, url) {
      $scope.response = null;
      $scope.api = type; 
      $http({
        url: url,
        method: 'Get'
      }). then (function(quote) {
        $scope.response = quote.data;
      }), function(error) {
        $scope.response = error.data;
      });
    }
  });