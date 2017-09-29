import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store';
import Root from './components/Root';

const store = configureStore();

render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
