/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import MainScreen from './src/screens/MainScreen';
import Box from './src/components/Box';
import { SafeAreaView , Platform } from 'react-native';
import Form from './src/components/Form';
import Filter from './src/components/Filter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultStore = {
  words: [
    { id: 1, en: 'One', vn: 'Một', isMemorized: true },
    { id: 2, en: 'Two', vn: 'Hai', isMemorized: true },
    { id: 3, en: 'Three', vn: 'Ba', isMemorized: false },
    { id: 4, en: 'Four', vn: 'Bốn', isMemorized: false },
    { id: 5, en: 'Five', vn: 'Năm', isMemorized: true },
  ],
  shouldShowForm: false,
  filterMode: 'Show_All',
};

const store = createStore((state = defaultStore , action) => {
  return state;
});


export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex : 1 , marginTop : Platform.OS === 'android' ? 10 : 0}}>
        <Provider store={store}>
          <MainScreen />
        </Provider>
      </SafeAreaView>
    );
  }
}
