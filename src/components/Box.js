/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Child from './Child';

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <View style={{justifyContent: 'center', flex: 1}}>
        <Text
          style={{
            alignSelf: 'center',
            color: 'red',
            fontSize: 20,
            marginBottom: 10,
          }}>
          Count = {this.state.count}
        </Text>
        <Child />
      </View>
    );
  }
}
