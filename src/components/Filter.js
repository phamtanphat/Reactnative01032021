import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import PropTypes from 'prop-types';

export default class Filter extends Component {
  static propTypes = {
    filterMode: PropTypes.string,
  };

  static defaultProps = {
    filterMode: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      filterMode: 'Show_All',
    };
  }
  render() {
    return (
      <View style={styles.containerPickerStyle}>
        <RNPickerSelect
          value={this.props.filterMode}
          onValueChange={(value) => this.props.onSetFilterMode(value)}
          items={[
            {label: 'Show All', value: 'Show_All'},
            {label: 'Show Forgot', value: 'Show_Forgot'},
            {label: 'Show Memorized', value: 'Show_Memorized'},
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerPickerStyle: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: 'black',
    padding: 20,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  pickerStyle: {
    padding: 50,
  },
});
