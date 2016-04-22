(function () {

  'use strict';

  angular.module('myApp').directive('mySharedScope', function () {
    return {
        template: '<img src="{{member.avatar}}"><br>{{member.description}}'
    }
  });
})();