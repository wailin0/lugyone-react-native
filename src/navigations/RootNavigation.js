import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import MenuScreen from "../screens/MenuScreen";
import ServiceScreen from "../screens/ServiceScreen";
import OrderScreen from "../screens/OrderScreen";

const RootNavigation = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Order" component={OrderScreen}/>
            <Tab.Screen name="Service" component={ServiceScreen}/>
            <Tab.Screen name="Menu" component={MenuScreen} />
        </Tab.Navigator>
    )
}

export default RootNavigation