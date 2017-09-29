import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store';
import Root from './components/Root';

import posts from './data/posts';
import comments from './data/comments';

const preloadedState = { posts, comments };

const store = configureStore(preloadedState);

render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
