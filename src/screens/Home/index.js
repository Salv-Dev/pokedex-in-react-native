import React, { useState, useEffect } from 'react'
import { FlatList } from 'react-native'

//https://pokeres.bastionbot.org/images/pokemon/1.png

import Item from './../../components/Item'
import pokedex from './../../api/pokedex.json'
import axios from 'axios'

import { Container, TitleScreen } from './styles'

export default function Home({ navigation }) {
    const [Items, setItems] = useState()

    function getItems() {
        setItems(pokedex)
    }

    useEffect(() => {
        getItems()
    }, [])

    return (
        <Container>
            <TitleScreen>Pokedex</TitleScreen>
            

            <FlatList
                data = { Items }
                initialNumToRender={10}
                renderItem = { ({ item }) => <Item navigation={ navigation } item={ item }/> }
                keyExtractor={(item, index) => index.toString()}
            />

        </Container>
    )
}