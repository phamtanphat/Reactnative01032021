/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View , Alert } from 'react-native';
import Word from '../components/Word';
import Filter from '../components/Filter';
import Form from '../components/Form';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/actionCreators';

class MainScreen extends Component {

    onToggleWord = (word) => {
        this.props.toggleWord(word);
    }

    onRemoveWord = (word) => {
        Alert.alert(
            'Thông báo',
            'Bạn có chắc muốn xoá hay không?',
            [
                {
                    text : 'Huỷ',
                    style: 'cancel',
                },
                {
                    text: 'Xoá',
                    onPress : () => {
                        this.props.dispatch({type : 'REMOVE_WORD' , word});
                    },
                },
            ],
            {cancelable : false}
        );
    }

    onToggleForm = () => {
        this.props.dispatch({ type: 'TOGGLE_FORM'});
    };

    onAddWord = (newWord , callback) =>{
        this.props.dispatch({type : 'ADD_WORD' , newWord});
        callback();
    }
    onSetFilterMode = (filterMode) => {
        this.props.dispatch({ type: 'SET_FILTER_MODE' , filterMode });
    }

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                <Form
                    onAddWord={this.onAddWord}
                    onToggleForm={this.onToggleForm}
                    shouldShowForm={this.props.shouldShowForm} />
                <Filter
                    onSetFilterMode={this.onSetFilterMode}
                    filterMode={this.props.filterMode} />
                <Word
                    onRemoveWord={this.onRemoveWord}
                    onToggleWord={this.onToggleWord}
                    data={this.props.words}
                    filterMode={this.props.filterMode}/>

            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        words : state.words ,
        filterMode : state.filterMode ,
        shouldShowForm : state.shouldShowForm,
    };
};

export default connect(mapStateToProps, actionCreators )(MainScreen);
