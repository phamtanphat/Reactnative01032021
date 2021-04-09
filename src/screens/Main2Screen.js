/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Main2Screen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{alignSelf: 'center', fontSize: 30, marginBottom: 10}}>
        Count : 0
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <TouchableOpacity
          style={{padding: 10, backgroundColor: 'green', borderRadius: 5}}>
          <Text>InCrease</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{padding: 10, backgroundColor: 'red', borderRadius: 5}}>
          <Text>DeCrease</Text>
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
    </View>
  );
};

export default Main2Screen;
