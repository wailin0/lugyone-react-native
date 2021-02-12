import React from 'react'
import {StyleSheet, View} from "react-native";
import MenuCard from "../components/MenuCard";

const MenuScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <MenuCard icon={'user-alt'} text={'Profile'} />
                <MenuCard icon={'bookmark'} text={'Bookmark'} />
            </View>
            <View style={styles.row}>
                <MenuCard icon={'box'} text={'My Trip'} />
                <MenuCard icon={'box'} text={'My Package'} />
            </View>
            <View style={styles.row}>
                <MenuCard icon={'question-circle'} text={'Help'} />
                <MenuCard icon={'question-circle'} text={'Logout'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FFF6ED',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'center'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: '2rem'
    }
})

export default MenuScreen