/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, SafeAreaView, View, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import screenDimension from '../helpers/screenDimension';


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
    renderItemWord = (word) => {
        return (
            <View key={word.id}>
                <View style={styles.groupWord}>
                    <View style={styles.groupHorizontal}>
                        <Text style={styles.textEn}>{word.en}</Text>
                        <Text style={styles.textVn}>
                            {word.isMemorized ? '----' : word.vn}
                        </Text>
                    </View>
                    <View style={styles.groupHorizontal}>
                        <TouchableOpacity
                            onPress={() => this.toggleWord(word)}
                            style={{
                                ...styles.buttonMemorize,
                                backgroundColor: word.isMemorized ? 'green' : 'red',
                            }}>
                            <Text style={styles.textMemorize}>
                                {word.isMemorized ? 'Forgot' : 'Memorize'}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.removeWord(word)}
                            style={styles.buttonRemove}>
                            <Text style={styles.textRemove}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
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

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                {this.renderForm(this.state.shouldShowForm)}
                <ScrollView>
                    <>
                        {this.state.words.map(word => this.renderItemWord(word))}
                    </>
                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    groupWord: {
        height: 100,
        backgroundColor: 'gainsboro',
        justifyContent: 'space-evenly',
        marginHorizontal: 10,
        borderRadius: 5,
        marginBottom: 10,
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowColor: '#000',
    },
    groupHorizontal: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    textEn: {
        color: 'green',
        fontWeight: '500',
        fontSize: screenDimension.getWidth() / 22,
    },
    textVn: {
        color: 'red',
        fontWeight: '500',
        fontSize: screenDimension.getWidth() / 22,
    },
    buttonMemorize: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
    },
    buttonRemove: {
        backgroundColor: 'yellow',
        padding: 10,
        borderRadius: 5,
    },
    textMemorize: {
        color: 'white',
        fontSize: screenDimension.getWidth() / 22,
    },
    textRemove: {
        color: 'darkblue',
        fontSize: screenDimension.getWidth() / 22,
    },
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
});
