/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View , Alert } from 'react-native';
import Word from '../components/Word';
import Filter from '../components/Filter';
import Form from '../components/Form';
import { connect } from 'react-redux';
import { addWord, removeWord} from '../redux/slices/wordSlice';
import { fetchWords, fetchToggleWord, fetchRemoveWord} from '../redux/slices/wordSlice';
import { toggleForm} from '../redux/slices/shouldShowFormSlice';
import { setFilterMode} from '../redux/slices/filterModeSlice';

class MainScreen extends Component {

    componentDidMount(){
        this.props.dispatch(fetchWords());
    }

    onToggleWord = (word) => {
        const {dispatch} = this.props;
        dispatch(fetchToggleWord({_id : word._id , isMemorized : !word.isMemorized}));

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
                        this.props.dispatch(fetchRemoveWord({_id : word._id}));
                    },
                },
            ],
            {cancelable : false}
        );
    }

    onToggleForm = () => {
        this.props.dispatch(toggleForm());
    };

    onAddWord = (newWord , callback) =>{
        this.props.dispatch(addWord(newWord));
        callback();
    }
    onSetFilterMode = (filterMode) => {
        this.props.dispatch(setFilterMode(filterMode));
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

export default connect(mapStateToProps)(MainScreen);
