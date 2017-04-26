import angular from 'angular';
import ngRoute from 'angular-route';

import 'angular-material';
import 'angular-material/angular-material.min.css';

import '../style/app.css';

//------- IMPORT directive & controllers ------//
import boot from './boot';
import test from './test';
import gridController from './grid/controller.js'

//------- IMPORT modules ------//
// import './home';
// import './grid';
import './profile';

//------- IMPORT service ------//
import User from './user';

//------- IMPORT templates ------//
import bootTemplate from './boot/boot.html';
import homeTemplate from './home/index.html';
import gridTemplate from './grid/index.html';

let app = angular.module('app', [
  'ngRoute',
  'ngMaterial',
  'profile'
]);

app.directive('test', test);
app.factory('User', User);


app.config( ($routeProvider, $locationProvider) => {
  $locationProvider.html5Mode(true);
  //$routeProvider.when(path, {template,controller});
  $routeProvider
    .when('/', {
      template: bootTemplate
    })
    .when('/home', {
      template: homeTemplate
    })
    .when ('/grid', {
      template: gridTemplate,
      controller: gridController
    })
    .otherwise({redirectTo: '/'});
});

export default app;