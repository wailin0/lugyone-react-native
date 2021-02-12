import React from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {FontAwesome5} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';

const ServiceSearch = () => {
    return (
        <View style={styles.root}>
            <View style={styles.input}>
                <MaterialIcons name="gps-fixed" size={15} color="#005e64"/>
                <TextInput
                    placeholder='Choose starting point'
                    style={{borderBottom: '1px solid #005e64', margin: 10}}
                />
                <FontAwesome5 name="search" size={15} color="#005e64"/>
            </View>
            <View style={styles.input}>
                <MaterialIcons name="location-on" size={15} color="#005e64"/>
                <TextInput
                    placeholder='Choose destination'
                    style={{borderBottom: '1px solid #005e64', margin: 10}}
                />
                <FontAwesome5 name="search" size={15} color="#005e64"/>
            </View>
            <TouchableOpacity
                style={{
                    borderRadius: 5,
                    border: '1px solid #005e64',
                    width: 70,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 30,
                    alignSelf: 'flex-end'
                }}
            >
                <Text>Search</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        position: 'absolute',
        top: 80,
        left: 10
    },
    input: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default ServiceSearch