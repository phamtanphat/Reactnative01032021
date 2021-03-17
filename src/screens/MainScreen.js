/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, SafeAreaView, View, TouchableOpacity, Dimensions } from 'react-native';
import screenDimension from '../helpers/screenDimension';

export default class MainScreen extends Component {

    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <TouchableOpacity
                    onPress={function () {
                        alert("hello")
                    }}
                    activeOpacity={0.5}
                    style={{
                        backgroundColor: 'orange',
                        width: screenDimension.getWidth() / 4.5,
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
