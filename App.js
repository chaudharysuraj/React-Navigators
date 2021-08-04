import React from 'react';
import { store, persistor } from './src/redux/store';
import "redux";
import Navigator from './src/navigation/Navigator';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  )
}
export default App;