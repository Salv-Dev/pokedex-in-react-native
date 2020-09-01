import React, { useContext } from 'react'
import CardFlip from 'react-native-card-flip'
import PokeContext from './../../PokeContext'
import { ThemeProvider } from 'styled-components'

import FrontCard from './../../components/FrontComponentCard'
import BackCard from './../../components/BackComponentCard'

import { Container } from './styles'

export default function Card({ route }) {
    const content = useContext(PokeContext)

    function getStyleCard() {
        return content.colors.filter(color => color.type == route.params.item.type[0].toLowerCase())[0]
    }

    return (
        <ThemeProvider theme={{ colors: getStyleCard()}}>
            <Container>
                <CardFlip style={{width: 320, height: 550}} ref={(card) => (this.card = card)} >
                    <FrontCard flip={() => this.card.flip()} item={route.params.item} />
                    <BackCard flip={() => this.card.flip()} item={route.params.item} />
                </CardFlip>
            </Container>
        </ThemeProvider>
    )
}