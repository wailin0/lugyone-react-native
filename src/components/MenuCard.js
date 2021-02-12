import React from "react";
import { FontAwesome5 } from '@expo/vector-icons';
import {StyleSheet, Text, View} from "react-native";

const ServiceCard = ({icon, text}) => {
    return (
        <View style={styles.container}>
            <FontAwesome5 name={icon} size={24} color="#F9AD59"
                          style={{
                              marginBottom: 10
                          }}
            />
            <Text>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        borderRadius: 17,
        boxShadow: '2px',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '8rem',
        height: '8rem',
    }
})

export default ServiceCard