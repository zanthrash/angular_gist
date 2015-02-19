'use strict';

angular.module('myApp.view1', ['ngRoute', 'hc.marked'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])

  .controller('View1Ctrl', function ($scope, $http) {
    $http.get('https://api.github.com/gists/b23ab52bb61cd19a6852')
      .success(function(data, status, headers, config) {
        var content = data.files.test_md.content;
        console.log(content);
        $scope.markdown = content;
      });
    //$scope.markdown = "*This* **is** SPARTA!!!";
  });