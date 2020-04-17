import {compose, createStore, applyMiddleware, combineReducers} from 'redux';

// middleware для асинхронного добавления middlewares
import dynamicMiddlewares from 'redux-dynamic-middlewares';

// маршрутизация url
import {createBrowserHistory} from 'history';
import {routerReducer as router, routerMiddleware} from 'react-router-redux';

// асинхронные действия
import thunk from 'redux-thunk';
import {metaReducer, ifaceReducer, dispatchIface, ifaceActions} from 'metadata-redux';
import ifaceInitialState from './metadata/reducers/iface';


// Create a history of your choosing (we're using a browser history in this case)
export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  return createStore(
    combineReducers({
      router,
      meta: metaReducer,
      iface: ifaceReducer(ifaceInitialState),
    }),
    preloadedState,
    compose(
      // add middleware for intercepting and dispatching async and navigation actions
      applyMiddleware(thunk, routerMiddleware(history), dynamicMiddlewares),

      /**
       * Conditionally add the Redux DevTools extension enhancer
       * if it is installed.
       */
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
  );
}

export {ifaceActions};

// создаём redux-store
export const store = configureStore();

// метод для установки state интерфейса
export const handleIfaceState = dispatchIface(store.dispatch);
