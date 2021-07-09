import React from 'react';
import {store} from './src/duck/store';
import {Provider} from 'react-redux';

import Counter from './src/screens/Counter';

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default App;
