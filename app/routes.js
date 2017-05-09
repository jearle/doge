// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';
import { replace } from 'react-router-redux';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        store.dispatch(replace('/habit'));
        cb();
      },
    }, {
      path: '/my-dojo',
      name: 'myDojoPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/MyDojoPage/reducer'),
          import('containers/MyDojoPage/sagas'),
          import('containers/MyDojoPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('myDojoPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/habit',
      name: 'habitPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HabitPage/reducer'),
          import('containers/HabitPage/sagas'),
          import('containers/HabitPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('habitPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: 'chat',
      name: 'chatPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/ChatPage/reducer'),
          import('containers/ChatPage/sagas'),
          import('containers/ChatPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('chatPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: 'concierge',
      name: 'conciergePage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/ConciergePage/reducer'),
          import('containers/ConciergePage/sagas'),
          import('containers/ConciergePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('conciergePage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/journey',
      name: 'journeyPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/JourneyPage/reducer'),
          import('containers/JourneyPage/sagas'),
          import('containers/JourneyPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('journeyPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
