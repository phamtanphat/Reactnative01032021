/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import MainScreen from './src/screens/MainScreen';
import Box from './src/components/Box';
import { SafeAreaView } from 'react-native';


export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex : 1}}>
        <Box/>
      </SafeAreaView>
    );
  }
}
