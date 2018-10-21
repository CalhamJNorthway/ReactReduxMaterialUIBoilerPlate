import * as React from 'react';
import * as ReactDOM from 'react-dom';

import MainPage from './containers/MainPage';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { number } from './reducers/index';
import { StoreState } from './types/index';

import './index.css';
import { NumberAction } from './actions';

const store = createStore<StoreState, NumberAction, null, null>(number, {
  number: 0,
  languageName: 'TypeScript',
});

ReactDOM.render(
  <Provider store={store}>
    <MainPage />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
