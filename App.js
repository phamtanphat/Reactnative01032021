/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import MainScreen from './src/screens/MainScreen';
import Box from './src/components/Box';
import { SafeAreaView , Platform } from 'react-native';
import Form from './src/components/Form';
import Filter from './src/components/Filter';
import { createStore } from 'redux';

const store = createStore((state = 0 , action) => {
  if (action.type === 'INCREASE') {
    return state + 1;
  }
  return state;
});

console.log(store.getState());
// Thay đổi store bằng cách gửi action
store.dispatch({ type : 'INCREASE'});
console.log(store.getState());



export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex : 1 , marginTop : Platform.OS === 'android' ? 10 : 0}}>
        <MainScreen/>
      </SafeAreaView>
    );
  }
}
