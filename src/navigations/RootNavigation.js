import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import MenuScreen from "../screens/MenuScreen";
import ServiceScreen from "../screens/ServiceScreen";
import OrderScreen from "../screens/OrderScreen";
import {FontAwesome5} from '@expo/vector-icons';

const RootNavigation = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    backgroundColor: '#005e64'
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({focused}) => <FontAwesome5 name="home" size={24} color={focused ? 'green' : '#F9AD59'}/>
                }}
            />
            <Tab.Screen
                name="Order"
                component={OrderScreen}
                options={{
                    tabBarIcon: ({focused}) => <FontAwesome5 name="box" size={24} color={focused ? 'green' : '#F9AD59'}/>
                }}
            />
            <Tab.Screen
                name="Service"
                component={ServiceScreen}
                options={{
                    tabBarIcon: ({focused}) => <FontAwesome5 name="truck" size={24} color={focused ? 'green' : '#F9AD59'}/>
                }}
            />
            <Tab.Screen
                name="Menu"
                component={MenuScreen}
                options={{
                    tabBarIcon: ({focused}) => <FontAwesome5 name="bars" size={24} color={focused ? 'green' : '#F9AD59'}/>
                }}
            />
        </Tab.Navigator>
    )
}

export default RootNavigation