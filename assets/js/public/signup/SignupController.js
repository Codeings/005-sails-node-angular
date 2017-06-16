angular.module('SignupModule').controller('SignupController', ['$scope',
    function($scope) {

      $scope.signupFormSubmit = function (){
           console.log($scope.user.email);
        }
    }
]);
