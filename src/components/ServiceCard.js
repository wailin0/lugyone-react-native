import React from "react";
import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const ServiceCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.flex}>
                <Text>Yangon</Text>
                <Text>Mandalay</Text>
            </View>
            <View style={styles.flex}>
                <Text>Name</Text>
                <Text>9usd/lb</Text>
            </View>
            <View style={styles.flex}>
                <Text>Last Drop-off</Text>
                <Text>Jan 2 2021</Text>
            </View>
            <Button title="detail"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: '2rem',
        marginRight: '2rem',
        marginBottom: '1rem',
        padding: '1rem',
        backgroundColor: 'lightpink',
        borderRadius: 10
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '1rem'
    }
})

export default ServiceCard