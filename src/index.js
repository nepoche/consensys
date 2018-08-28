import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom'
import { DrizzleProvider } from 'drizzle-react'
import { Provider } from 'react-redux';

// Layouts
import App from './App'
import { LoadingContainer } from 'drizzle-react-components'

import { history, store } from './store'
import drizzleOptions from './drizzleOptions'

const render = () => {
  return ReactDOM.render((
      <Provider store={store}>
        <DrizzleProvider options={drizzleOptions}>
          <LoadingContainer>
            <Router history={history} store={store}>
              <Route
                component={App}
              />
            </Router>
          </LoadingContainer>
        </DrizzleProvider>
      </Provider>
    ),
    document.getElementById('root')
  );
}

render();