import React from 'react'
import { StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './screens/Home'
import Card from './screens/Card'

const Stack = createStackNavigator()

export default function Main() {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
            <Stack.Navigator initialRouteName={Home}>
                <Stack.Screen name="Home" component={Home} options={{
                    headerShown: false,
                }}/>
                <Stack.Screen name="Card" component={Card} options={{
                    headerTransparent: true,
                    headerTitle: '',
                    headerTintColor: '#fff',
                }}/>
            </Stack.Navigator>
        </>
    )
}