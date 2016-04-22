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
          $scope.info.map
          console.log("This is scope active"+ $scope.active)
        });

        $scope.orderByPopular = function() {
          MemberService.search().then(function (data) {
          var info = data.data.data;
          console.log(info);
          var newArray = [];
          info.forEach(function(item){
              newArray.push(item.username, item.avatar,item._matches.length);
          });


          console.log("This is newArray"+testArray)

// Users can be sorted by Popularity where 
// popularity is defined as those users having 
// the most relative matches
            // sort by matches
            // $scope.info = UPDATED ARRAY
          });          
        }


        $scope.orderByMatches = function() {
          MemberService.search().then(function (data) {
             
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






