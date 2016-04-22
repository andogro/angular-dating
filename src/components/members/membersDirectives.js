(function () {

  'use strict';

  angular.module('myApp').directive('singleMember', function () {
    return {
        template: '<img src="{{member.avatar}}"><br>{{member.description}}'
    }
  });
})();