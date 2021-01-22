import React from "react";
import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const ServiceCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.icon}></View>
            <Text>Profile</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        borderRadius: '50%',
        backgroundColor: 'yellow',
        width: 50,
        height: 50
    },
    container: {
        textAlign: 'center',
        borderRadius: 10,
        boxShadow: '2px',
        backgroundColor: 'white',
        width: '8rem',
        height: '8rem'
    }
})

export default ServiceCard