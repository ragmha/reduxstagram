import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import '../styles/App.css';
import App from './App';
import ContentRouter from './ContentRouter';

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <ContentRouter />
      </App>
    </BrowserRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
