import profileTemplate from './index.html';

const profileDirective = () => {
  return {
    template: profileTemplate,
    controller: profileController
  }
}

const profileController = ($scope, User) => {
  $scope.user = User.getName();
}

const profileModule = angular.module('profile', []);

profileModule.directive('profile', profileDirective);
profileModule.controller('profileController', profileController);

export default profileModule;