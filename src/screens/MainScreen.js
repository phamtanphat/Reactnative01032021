/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import Word from '../components/Word';
import Filter from '../components/Filter';
import Form from '../components/Form';

export default class MainScreen extends Component {

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
            txtEn : '',
            txtVn : '',
            filterMode: 'Show_All',
        };
    }

    toggleWord = (word) => {
        const newWords = this.state.words.map(item => {
            if (item.id === word.id) {
                return { ...item, isMemorized: !item.isMemorized };
            }
            return item;
        });
        this.setState({ words: newWords });
    }

    removeWord = (word) => {
        const newWords = this.state.words.filter(item => {
            if (item.id === word.id) {
                return false;
            }
            return true;
        });
        this.setState({ words: newWords });
    }

    onToggleForm = () => {
        this.setState({ shouldShowForm: !this.state.shouldShowForm });
    };

    onAddWord = (newWord , callback) =>{
        const newWords = this.state.words.map(word => ({ ...word }));
        newWords.push(newWord);
        this.setState({ words: newWords }, callback);
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
                    shouldShowForm={this.state.shouldShowForm} />
                <Filter filterMode={this.state.filterMode} />
                <Word
                data={this.state.words}
                filterMode={this.state.filterMode}/>

            </View>
        );
    }
}
