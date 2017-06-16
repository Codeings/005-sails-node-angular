angular.module('SignupModule', [])
.controller('SignupController', ['$scope','$http',  function($scope, $http) {
  //  $scope.user = {

    //}

      $scope.signupFormSubmit = function (){
           //console.log('Email ' + $scope.user.email);
           $http.post('/signup', {
                name:        $scope.user.name,
                username:    $scope.user.username,
                email:       $scope.user.email,
                password:    $scope.user.password
           }).then(function onSuccess(){
                window.location = '/user';
           }).catch(function onError (sailsResponse){
             console.log(sailsResponse);
           }).finally(function anyway(){
             console.log('intente registrar');
           });
        }
    }
]);
