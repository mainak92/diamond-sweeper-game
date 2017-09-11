import React from 'react';
import {render} from 'react-dom';

/*
 * The Provider component provides
 * the React store to all its child
 * components so we don't need to pass
 * it explicitly to all the components.
 */
import {Provider} from 'react-redux';

import {createStore, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import {AppContainer} from 'react-hot-loader';

import grid from './reducers/grid';
import App from './components/App';

const logger = createLogger();

/*
 * The initial state of the app.
 *
 * This describes a 10x10 picture
 * of a smiley face. :)
 */
const initialState = {
  width: 8,
  height: 8,
  cells: [
  0,1,0,1,0,1,0,1,
  0,1,0,1,0,1,0,1,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0
  ]
};

/*
 * The enhancer are passed when
 * creating the Redux store to
 * add some extra functionality.
 *
 * In this case we add a logger
 * middleware that write some debug
 * information every time the
 * state is changed.
 *
 */
const enhancer = compose(
  applyMiddleware(logger)
);

/*
 * This creates the store so we
 * can listen to changes and
 * dispatch actions.
 */
const store = createStore(grid, initialState, enhancer);

const rootElement = document.getElementById('root');

render(
  <AppContainer>
    <Provider store={store}>
      <div>
        <App />
      </div>
    </Provider>
  </AppContainer>,
  rootElement
);

/**
 * This is for hot reloading so the
 * app updates every time the code of
 * the components change.
 */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    render(
      <AppContainer>
        <Provider store={store}>
          <div>
            <NextApp />
          </div>
        </Provider>
      </AppContainer>,
      rootElement
    );
  });
}
