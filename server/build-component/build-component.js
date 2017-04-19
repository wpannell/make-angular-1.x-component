import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

import {buildComponentComponent} from './build-component-component';

export const buildComponent = angular.module('buildComponent', [
  uiRouter,
  ngAnimate,
  ngAria,
  ngMaterial
])
.directive('buildComponent', buildComponentComponent);
