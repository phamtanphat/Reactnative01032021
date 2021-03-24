import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class ItemWord extends Component {
  render() {
    return <Text>{this.props.en}</Text>;
  }
}
