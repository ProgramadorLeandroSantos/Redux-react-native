import React from 'react';
import { View } from 'react-native';
import Header from './Components/Header';
import List from './Components/List';
import { Provider } from 'react-redux'
import store from './Reducers/store';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Header />
        <List />
      </View>
    </Provider>
  )
}

export default App;