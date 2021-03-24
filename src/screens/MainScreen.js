/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, SafeAreaView, View, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import screenDimension from '../helpers/screenDimension';
import RNPickerSelect from 'react-native-picker-select';
import Word from '../components/Word';

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

    toggleForm = () => {
        this.setState({ shouldShowForm: !this.state.shouldShowForm });
    };

    addWord = () =>{
        const { txtEn, txtVn } = this.state;
        if (txtEn.length <= 0 || txtVn.length <= 0) {
            return alert('Bạn chưa nhập đủ thông tin');
        }
        const newWords = this.state.words.map(word => ({ ...word }));
        const newWord = {
            id: Math.random(),
            en: txtEn,
            vn: txtVn,
            isMemorized: false,
        };
        newWords.push(newWord);
        this.setState({ words: newWords, txtEn: '', txtVn: '' }, () => {
            this.textInputEn.clear();
            this.textInputVn.clear();
        });
    }
    
    renderForm = (shouldShowForm) => {
        if (shouldShowForm) {
            return (
                <View>
                    <View style={styles.containerTextInput}>
                        <TextInput
                            onChangeText={(text) => (this.state.txtEn = text)}
                            placeholder="English"
                            style={styles.textInput}
                            ref={(refs) => (this.textInputEn = refs)}
                        />
                        <TextInput
                            onChangeText={(text) => (this.state.txtVn = text)}
                            placeholder="Vietnamese"
                            style={styles.textInput}
                            ref={(refs) => (this.textInputVn = refs)}
                        />
                    </View>
                    <View style={styles.containerTouchable}>
                        <TouchableOpacity
                            onPress={this.addWord}
                            style={styles.touchableAddword}>
                            <Text style={styles.textTouchable}>Add word</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.toggleForm}
                            style={styles.touchableCancel}>
                            <Text style={styles.textTouchable}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        } else {
            return (
                <TouchableOpacity
                    onPress={this.toggleForm}
                    style={styles.buttonOpenForm}>
                    <Text style={styles.textOpenForm}>+</Text>
                </TouchableOpacity>
            );
        }
    };

    renderFilter = () => {
        return (
            <View style={styles.containerPickerStyle}>
                <RNPickerSelect
                    onValueChange={(value) => this.setState({ filterMode: value })}
                    items={[
                        { label: 'Show All', value: 'Show_All' },
                        { label: 'Show Forgot', value: 'Show_Forgot' },
                        { label: 'Show Memorized', value: 'Show_Memorized' },
                    ]}
                />
            </View>
        );
    }

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                {this.renderForm(this.state.shouldShowForm)}
                {this.renderFilter()}
                <Word/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerTextInput: {
        width: '100%',
        height: 150,
        justifyContent: 'space-evenly',
    },
    textInput: {
        borderWidth: 1,
        height: 60,
        fontSize: 20,
        marginHorizontal: 10,
        paddingHorizontal: 10,
    },
    touchableAddword: {
        backgroundColor: '#218838',
        padding: 15,
        borderRadius: 10,
    },
    textTouchable: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
    },
    touchableCancel: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 10,
    },
    buttonOpenForm: {
        marginHorizontal: 10,
        height: 50,
        backgroundColor: '#45B157',
        borderRadius: 5,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textOpenForm: {
        color: 'white',
        fontSize: 30,
    },
    containerTouchable: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10,
    },
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
