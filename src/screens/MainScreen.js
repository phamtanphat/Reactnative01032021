/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, SafeAreaView } from 'react-native';

export default class MainScreen extends Component {

    // shouldShowVn(isMemorized, vn) {
    //     if (isMemorized) {
    //         return '----';
    //     } else {
    //         return vn;
    //     }
    // }

    render() {
        // destructuring
        const { vn, en, isMemorized } = { en: 'One', vn: 'Mot', isMemorized: true };
        return (
            <SafeAreaView style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
            }}>
                <Text style={{ fontSize: 30 }}> {en} </Text>
                <Text style={{ fontSize: 30 }}> {isMemorized ? "----" : vn} </Text>
            </SafeAreaView>
        );
    }
}
