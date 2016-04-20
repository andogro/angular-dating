
app.controller('registerController', ['$scope', '$http', 'NameService', 
    function($scope, $http, NameService) {

        $scope.loading = true;

        NameService.search().then(function (data) {
        $scope.info = data.data.data;
        $scope.loading = false;
        });

}]);



