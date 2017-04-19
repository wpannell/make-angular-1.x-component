import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

import {serverComponent} from './server-component';

export const server = angular.module('server', [
  uiRouter,
  ngAnimate,
  ngAria,
  ngMaterial
])
.directive('server', serverComponent);
