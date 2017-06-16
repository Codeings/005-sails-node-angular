angular.module('SignupModule', [])
.controller('SignupController', ['$scope','SignupService',  function($scope, SignupService) {

      $scope.signupFormSubmit = function (){
           var data = {
             name:        $scope.user.name,
             username:    $scope.user.username,
             email:       $scope.user.email,
             password:    $scope.user.password
           };

           SignupService.createUser(data).success(function (chuck, status) {
             alert(JSON.stringify(chuck));
             window.location = '/user';
           }).catch(function (err) {
             console.log(err);
           }).finally(function () {
             console.log('intente crear algo');
           });

        }
    }]);
