import './build-component.styl';
import template from './build-component.html';
import {BuildComponentController as controller} from './build-component-controller';

export const buildComponentComponent = () => {
  return {
    template,
    restrict: 'E',
    replace: true,
    scope: {},
    controller,
    controllerAs: 'vm'
  };
};
