var myApp = angular.module('myApp', []);

myApp.controller('myController', function MyController($scope){
  $scope.author = {
    'name': 'Nicole Hall',
    'relationship': 'friend',
    'state': 'CO'
  };
});
