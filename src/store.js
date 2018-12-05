import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { fromJS, Iterable } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { createPersistor, getStoredState } from 'redux-persist-immutable';
import { mergeDeepRight } from 'ramda';
import createReducer from 'modules/root.reducer';
import rootSaga from 'modules/root.saga';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  whitelist: [],
};

export default function configureStore(initialState = {}, history, cb) {
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
  ];

  const enhancers = [];

  if (process.env.NODE_ENV === 'development') {
    const { persistState } = require('redux-devtools');

    const stateTransformer = (state) => {
      if (Iterable.isIterable(state)) {
        return state.toJS();
      }
      return state;
    };

    middlewares.push(createLogger({ stateTransformer }));

    const getDebugSessionKey = () => {
      const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
      return (matches && matches.length > 0) ? matches[1] : null;
    };

    Array.prototype.push.apply(enhancers, [
      require('./utils/devtools.component').default.instrument(),
      persistState(getDebugSessionKey(), (state) => fromJS(state)),
    ]);
  }

  getStoredState(persistConfig, (err, restoredState = {}) => {
    if (err) {
      console.log(err);
    }

    const store = createStore(
      createReducer(),
      fromJS(mergeDeepRight(initialState, restoredState)),
      compose(
        applyMiddleware(...middlewares),
        ...enhancers,
      )
    );

    createPersistor(store, persistConfig);

    sagaMiddleware.run(rootSaga);

    if (module.hot) {
      module.hot.accept('./modules/root.reducer', () => {
        const createReducers = require('./modules/root.reducer').default;
        const nextReducers = createReducers(store.asyncReducers);

        store.replaceReducer(nextReducers);
      });
    }

    cb(store);
  });
}
