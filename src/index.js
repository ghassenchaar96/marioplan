import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Root } from 'containers';
import configureStore from 'store';
import 'styles/index.css';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import * as serviceWorker from './serviceWorker';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <NotificationContainer />
    <Router>
      <Switch>
        <Route path="/" component={Root} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
