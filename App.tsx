import React from 'react';
import store from './src/store/store';
import {Provider} from 'react-redux';
import Main from './src/screens/main';

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
