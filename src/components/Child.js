/* eslint-disable react-native/no-inline-styles */
import React, {memo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Child = ({onInCrease, onDeCrease, onReset}) => {
  console.log("Child render")
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <TouchableOpacity
        onPress={onInCrease}
        style={{padding: 10, backgroundColor: 'green', borderRadius: 5}}>
        <Text>InCrease</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onDeCrease}
        style={{padding: 10, backgroundColor: 'red', borderRadius: 5}}>
        <Text>DeCrease</Text>
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
};

export default memo(Child);
