/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  shouldComponentUpdate(newProps, newState) {
    console.log(newState.count);
    return false;
  }

  render() {
    console.log('Render');
    return (
      <View style={{justifyContent: 'center', flex: 1}}>
        <Text
          style={{
            alignSelf: 'center',
            color: 'red',
            fontSize: 20,
            marginBottom: 10,
          }}>
          Count = 0
        </Text>
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
      </View>
    );
  }
  componentDidMount() {
    console.log('componentDidMount');
    this.setState({count: 1});
  }
}
