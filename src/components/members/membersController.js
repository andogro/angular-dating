(function () {

  'use strict';

  angular.module('myApp')
    .controller('membersController', membersController);

  membersController.$inject = ['$scope', '$window', 'MemberService'];

  function membersController($scope, $window, MemberService) {

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
           var popular = info.sort(function(a, b){
              return b._matches.length - a._matches.length
            })
            $scope.info = popular;

          });          
        }


        $scope.orderByMatches = function() {
          MemberService.search().then(function (data) {
            console.log("scope.user"+$scope.user);
             var info = data.data.data;  
            


            console.log(info);
             
             //get an array of all matches of all users

             //get the current user's id number

             //if any matches, then return those matches



            // sort by matches
            // $scope.info = UPDATED ARRAY
          });          
        }


        $scope.showOne = function(items) {
          $scope.member = items;
          $scope.show = true;
        }

  }

})();



// Users can be sorted by Location where that is defined by within 20 miles of the current user

// Users can be sorted by Conversation, where the user only sees people with whom he has started a conversation






