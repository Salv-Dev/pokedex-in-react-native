import React, { useEffect, useState, useContext } from 'react'
import { FlatList } from 'react-native'
import PokeContext from './../../PokeContext'

import Item from './../../components/Item'

import { Container, TitleScreen } from './styles'

export default function Home({ navigation }) {
    const content = useContext(PokeContext)
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(content.pokedex)
    }, [])

    return (
        <Container>
            <TitleScreen>Pokedex</TitleScreen>
            <FlatList
                showsVerticalScrollIndicator={false}
                data = { items }
                initialNumToRender={10}
                renderItem = { ({ item }) => <Item navigation={ navigation } item={ item }/> }
                keyExtractor={(item, index) => index.toString()}
            />
        </Container>
    )
}