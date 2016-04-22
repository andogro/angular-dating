(function () {

  'use strict';

  angular.module('myApp')
    .service('MemberService', MemberService);

  MemberService.$inject = ['$http']; 

  function MemberService($http) {
      return {
        search: function() {
         return $http.get("https://galvanize-student-apis.herokuapp.com/gdating/members/")   
      }//end search function 
    }//return data
  }
})();