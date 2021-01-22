import React from 'react'
import {StyleSheet, Text, View} from "react-native";
import MenuCard from "../components/MenuCard";

const MenuScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <MenuCard/>
                <MenuCard/>
            </View>
            <View style={styles.row}>
                <MenuCard/>
                <MenuCard/>
            </View>
            <View style={styles.row}>
                <MenuCard/>
                <MenuCard/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: '2rem',
        marginRight: '2rem',
        marginTop: '10rem',
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: '2rem'
    }
})

export default MenuScreen