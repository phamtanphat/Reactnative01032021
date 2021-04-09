/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import Child from './Child';

const Box = ({count}) => {
  return (
    <View style={{justifyContent: 'center', flex: 1}}>
      <Text
        style={{
          alignSelf: 'center',
          color: 'red',
          fontSize: 20,
          marginBottom: 10,
        }}>
        Count = {count}
      </Text>
      <Child />
    </View>
  );
};

export default Box;
