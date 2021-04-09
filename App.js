/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import MainScreen from './src/screens/MainScreen';
import { SafeAreaView , Platform } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Main2Screen from './src/screens/Main2Screen';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex : 1 , marginTop : Platform.OS === 'android' ? 10 : 0}}>
        {/* <Provider store={store}>
          <MainScreen />
        </Provider> */}
        <Main2Screen />
      </SafeAreaView>
    );
  }
}







// return state;
