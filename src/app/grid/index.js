import gridTemplate from './index.html';

const gridController = ($scope) => {
  $scope.greeting = 'salut';
}

const gridDirective = () => {
  return {
    template: gridTemplate,
    controller: gridController
  }
}

const gridModule = angular.module('grid', []);

// 'grid' ici nous permet de trouver le tag html à remplacer (<grid></grid>)
gridModule.directive('grid', gridDirective);

// Un controller ça a en argument avant tout autre chose son $scope
gridModule.controller('gridController', gridController);

export default gridModule;