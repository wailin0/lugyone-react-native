import React from 'react'
import {
    Button,
    FlatList,
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import ServiceCard from "../components/ServiceCard";

const list = [1, 2]

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={list}
                renderItem={ServiceCard}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default HomeScreen