//Imports
import React from 'react'
import 'react-native-reanimated'
import 'react-native-gesture-handler'

//Redux
import { Provider } from 'react-redux';
import { store } from './src/store/store';

//Routes
import Routes from './src/Routes/routes';

//Talk is cheap, let's code!
export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}