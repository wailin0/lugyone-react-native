import React from 'react'
import {FlatList, StyleSheet, View} from "react-native";
import ServiceCard from "../components/ServiceCard";
import Lugyone from "../components/Lugyone";
import ServiceScreen from "./ServiceScreen";
import ServiceSearch from "../components/ServiceSearch";

const list = [1, 2, 3, 4, 5, 6, 7]

const HomeScreen = () => {
    return (
        <View style={styles.root}>
            <View
                style={{
                    margin: 20
                }}
            >
                <Lugyone/>
            </View>
            <ServiceSearch/>
            <View style={styles.container}>
                <FlatList
                    data={list}
                    showsHorizontalScrollIndicator={false}
                    renderItem={ServiceCard}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#fffff',
    },
    container: {
        flex: 1,
        marginTop: 140,
        backgroundColor: '#FFF6ED',
        borderTopLeftRadius: 55,
        paddingTop: 30,
        paddingLeft: 30,
        paddingRight: 30
    }
})

export default HomeScreen