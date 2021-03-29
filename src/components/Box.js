/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Child from './Child';
import {connect} from 'react-redux';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  onInCrease = () => {
    this.setState({count: this.state.count + 1});
  };
  onDesCrease = () => {
    this.setState({count: this.state.count - 1});
  };
  onReset = () => {
    this.setState({count: 0});
  };

  render() {
    console.log('Render Box');
    return (
      <View style={{justifyContent: 'center', flex: 1}}>
        <Text
          style={{
            alignSelf: 'center',
            color: 'red',
            fontSize: 20,
            marginBottom: 10,
          }}>
          Count = {this.props.count}
        </Text>
        <Child
          onInCrease={this.onInCrease}
          onDesCrease={this.onDesCrease}
          onReset={this.onReset}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {count: state};
};

export default connect(mapStateToProps)(Box);
