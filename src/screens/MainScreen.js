/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, SafeAreaView } from 'react-native';

export default class MainScreen extends Component {
    render() {
        // destructuring
        const { en, vn } = { en: 'One', vn: "Mot" }
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Text> {en} </Text>
                <Text> {vn} </Text>
            </SafeAreaView>
        );
    }
}
