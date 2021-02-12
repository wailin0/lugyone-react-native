import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";

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
        padding: '1rem',
        backgroundColor: 'lightpink',
        borderRadius: 8,
        marginBottom: 15
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default ServiceCard