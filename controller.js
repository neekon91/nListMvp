var myToDoList = angular.module('myToDoList', ['ngFileUpload']);
myToDoList.controller('contr', ['$scope', '$http', 'Upload','$window', function($scope, $http, Upload, $window) {
    
var suc = function(response) {
  reload();
};

reload();

$scope.addItem = function() {
  console.log(this);
  var data = {
    item: $scope.listItem.item,
    dueDate: $scope.listItem.dueDate,
    notes: $scope.listItem.notes,
    image: 'http://localhost:5000/uploads/'+$scope.findPicName()
  }


  $http.post('/todolist', data).success(suc());
  reload();
};

$scope.change = function() {
  $http.put('/todolist/' + $scope.listItem._id, $scope.listItem).success(suc())
};

$scope.remove = function(id) {
  $http.delete('/todolist/' + id).success(suc());
};

$scope.edit = function(id) {
  $http.get('/todolist/' + id).success(function(response) {
    $scope.listItem = response;
  });
};  

}]);