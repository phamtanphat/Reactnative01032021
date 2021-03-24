/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class Child extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <TouchableOpacity
          style={{padding: 10, backgroundColor: 'green', borderRadius: 5}}>
          <Text>InCrease</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{padding: 10, backgroundColor: 'red', borderRadius: 5}}>
          <Text>DesCrease</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: 'yellow',
            borderRadius: 5,
          }}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
