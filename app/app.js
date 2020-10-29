import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);

import singleSpaEmber from 'single-spa-ember';

const emberLifecycles = singleSpaEmber({
  App,
  appName: 'navbar',
  createOpts: {
    rootElement: '#navbar',
  }
});

export const bootstrap = emberLifecycles.bootstrap;
export const mount = emberLifecycles.mount;
export const unmount = emberLifecycles.unmount;

/*
export const unmount = () => {

  return emberLifecycles.unmount().then(() => {

  const app = Array.from(document.querySelectorAll('script')).filter(s => s.src.endsWith('/navbar/assets/navbar.js'))
  document.head.removeChild(app[0]);
  const vendor = Array.from(document.querySelectorAll('script')).filter(s => s.src.endsWith('/navbar/assets/vendor.js'))
  document.head.removeChild(vendor[0]);
  });
}
*/
