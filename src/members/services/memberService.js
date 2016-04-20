  app.service("NameService", ["$http", function ($http) {
      return {
        search: function() {
         return $http.get("https://galvanize-student-apis.herokuapp.com/gdating/members/")   
      }//end search function 
    }//return data
  }]);