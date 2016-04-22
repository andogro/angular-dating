(function () {

  'use strict';

  angular.module('myApp')
    .controller('membersController', membersController);

  membersController.$inject = ['$scope', '$window', 'MemberService', 'authService'];

  function membersController($scope, $window, MemberService, authService) {

        $scope.loading = true;

        MemberService.search().then(function (data) {
          $scope.info = data.data.data;
          $scope.loading = false;
        });

        $scope.viewAll = function() {
        $scope.loading = true;
        MemberService.search().then(function (data) {
          $scope.info = data.data.data;
          $scope.loading = false;
        });          
        }

        $scope.orderByPopular = function() {
          $scope.loading = true;
          MemberService.search().then(function (data) {
          var info = data.data.data;
          $scope.loading = false;
          var popular = info.sort(function(prev, next){
              return next._matches.length - prev._matches.length
            })
          $scope.info = popular;
          });          
        }

        $scope.orderByMatches = function() {        
          var user = JSON.parse($window.localStorage.getItem('user'));
          var userid = user._id;
          $scope.loading = true;
          MemberService.search().then(function (data) {
          var info = data.data.data;
          var results = info.filter(function(obj) { 
            console.log(obj._matches);
            return obj._matches 
          });
          console.log(results);
          //not quite
          $scope.loading = false;
          
          var matched = ""
          $scope.info = matched;
          });  

             // Pseudo
             //get an array of all matches of all users

             //get the current user's id number

             //if any matches, then return those matches
      
        }


        $scope.showOne = function(items) {
          $scope.member = items;
          $scope.show = true;
        }

  }

})();



// Users can be sorted by Location where that is defined by within 20 miles of the current user

// Users can be sorted by Conversation, where the user only sees people with whom he has started a conversation






