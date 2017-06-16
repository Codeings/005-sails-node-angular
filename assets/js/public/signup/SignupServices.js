angular.module('SignupModule').factory('SignupService', ['$http', function($http) {

  return{
    createUser: function (data) {
          return $http.post('/signup', data);
    }
  };
}]);
