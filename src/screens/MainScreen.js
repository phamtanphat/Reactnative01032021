/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, SafeAreaView, View, TouchableOpacity, StyleSheet } from 'react-native';
import screenDimension from '../helpers/screenDimension';


export default class MainScreen extends Component {

    render() {

        const word = [
            { id: 1, en: "One", vn: "Một", isMemorized: true },
            { id: 2, en: "Two", vn: "Hai", isMemorized: true },
            { id: 3, en: "Three", vn: "Ba", isMemorized: false },
            { id: 4, en: "Four", vn: "Bốn", isMemorized: false },
            { id: 5, en: "Five", vn: "Năm", isMemorized: true },
        ];

        return (
            <SafeAreaView style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                {
                    word.map(word => {
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
                                            style={{
                                                ...styles.buttonMemorize,
                                                backgroundColor: word.isMemorized ? 'green' : 'red',
                                            }}>
                                            <Text style={styles.textMemorize}>
                                                {word.isMemorized ? 'Forgot' : 'Memorize'}
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={styles.buttonRemove}>
                                            <Text style={styles.textRemove}>Remove</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        );
                    })
                }
            </SafeAreaView>
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
});
