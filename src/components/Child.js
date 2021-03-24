/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class Child extends PureComponent {
  render() {
    console.log('Render Child');
    const {onInCrease, onDesCrease, onReset} = this.props;
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <TouchableOpacity
          onPress={onInCrease}
          style={{padding: 10, backgroundColor: 'green', borderRadius: 5}}>
          <Text>InCrease</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onDesCrease}
          style={{padding: 10, backgroundColor: 'red', borderRadius: 5}}>
          <Text>DesCrease</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onReset}
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
