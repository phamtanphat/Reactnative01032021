/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View , Alert } from 'react-native';
import Word from '../components/Word';
import Filter from '../components/Filter';
import Form from '../components/Form';
import { connect } from 'react-redux';

class MainScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            words: [
                { id: 1, en: 'One', vn: 'Một', isMemorized: true },
                { id: 2, en: 'Two', vn: 'Hai', isMemorized: true },
                { id: 3, en: 'Three', vn: 'Ba', isMemorized: false },
                { id: 4, en: 'Four', vn: 'Bốn', isMemorized: false },
                { id: 5, en: 'Five', vn: 'Năm', isMemorized: true },
            ],
            shouldShowForm: false,
            filterMode: 'Show_All',
        };
    }

    onToggleWord = (word) => {
        const newWords = this.state.words.map(item => {
            if (item.id === word.id) {
                return { ...item, isMemorized: !item.isMemorized };
            }
            return item;
        });
        this.setState({ words: newWords });
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
                        const newWords = this.state.words.filter(item => {
                            if (item.id === word.id) {
                                return false;
                            }
                            return true;
                        });
                        this.setState({ words: newWords });
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
        this.setState({ filterMode });
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
                    filterMode={this.props.filterMode} />
                <Word
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
