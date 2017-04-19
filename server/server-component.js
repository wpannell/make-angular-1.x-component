import './server.styl';
import template from './server.html';
import {ServerController as controller} from './server-controller';

export const serverComponent = () => {
  return {
    template,
    restrict: 'E',
    replace: true,
    scope: {},
    controller,
    controllerAs: 'vm'
  };
};
