import homeTemplate from './index.html';

const homeDirective = () => {
  return {
    template: homeTemplate
  }
}

const homeModule = angular.module('home', []);

homeModule.directive('home', homeDirective);

export default homeModule;