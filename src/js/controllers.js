app.controller('myController', ['$scope', '$http', 'NameService', 
    function($scope, $http, NameService) {
  
  $scope.search = function() {
        NameService.search().then(function (data) {
        $scope.firstName = data.data.data[0].names.firstName;
         console.log($scope.firstName);
        });
      };
}]);

