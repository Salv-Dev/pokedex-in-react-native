import React from 'react'
import { StatusBar } from 'react-native'

import Home from './screens/Home'
import Card from './screens/Card'

export default function Main() {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
            <Card />
        </>
    )
}