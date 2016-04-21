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

        $scope.showOne = function(items) {
          $scope.member = items;
          $scope.show = true;
        }
  }

})();

