import React from 'react';
import NavigationContainer from "@react-navigation/native/src/NavigationContainer";
import RootNavigation from "./src/navigations/RootNavigation";

export default function App() {
    return (
        <NavigationContainer>
            <RootNavigation />
        </NavigationContainer>
    )
}
