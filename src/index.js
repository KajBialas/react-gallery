import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import configureStore from './store';
import { AppContainer } from 'react-hot-loader';
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';

import App from 'routes';

// Global styles
import './utils/styles/global.style';

const initialState = {};
const browserHistory = createHistory();

configureStore(initialState, browserHistory, store => {
  if (process.env.NODE_ENV === 'development') {
    const DevToolsComponent = require('./utils/devtools.component').default;
    const devToolsRoot = window.document.createElement('div');

    window.document.body.appendChild(devToolsRoot);

    ReactDOM.render(
      <Provider store={store}>
        <DevToolsComponent/>
      </Provider>,
      devToolsRoot
    );
  }

  const render = () => {
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <ConnectedRouter history={browserHistory}>
            <App />
          </ConnectedRouter>
        </Provider>
      </AppContainer>,
      document.getElementById('root')
    );
  };

  render();
});

registerServiceWorker();