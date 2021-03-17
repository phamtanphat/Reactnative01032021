/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native';

export default class MainScreen extends Component {

    render() {
        // destructuring
        return (
            <SafeAreaView style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: 'orange',
                        width: 100,
                        height: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderRadius: 5,
                    }}>
                    <View>
                        <Text>Click</Text>
                    </View>
                </TouchableOpacity>


            </SafeAreaView>
        );
    }
}
