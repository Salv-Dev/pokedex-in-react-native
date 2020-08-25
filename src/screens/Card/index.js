import React from 'react'
import CardFlip from 'react-native-card-flip'
import { MaterialIcons } from '@expo/vector-icons'

import { Text } from 'react-native'

import img from './../../../assets/charizard.png'

import { Container, FrontCard, BackCard, CardHeader, ItemId, ItemTitle, CardBody, ItemLoc, Span, Loc, ItemInfos, Info, CardFooter, ItemImage, MoreInfo, InfoText } from './styles'

export default function Card() {
    return (
        <Container>
            <CardFlip style={{width: 320, height: 550}} ref={(card) => (this.card = card)} >
                <FrontCard onPress={() => this.card.flip()}>
                    <CardHeader>
                        <ItemId>#004</ItemId>
                        <ItemTitle>Charizard</ItemTitle>
                    </CardHeader>
                    <CardBody>
                        <ItemLoc>
                            <Span>Region: </Span>
                            <Loc>Kanto</Loc>
                        </ItemLoc>
                        <ItemInfos>
                            <Info>Height: 3.54m</Info>
                            <Info>weight: 38.23kg</Info>
                        </ItemInfos>
                    </CardBody>
                    <CardFooter>
                        <ItemImage source={img} />
                        <MoreInfo>
                            <InfoText>More info</InfoText>
                            <MaterialIcons name="touch-app" size={22} color="#424242" />
                        </MoreInfo>
                    </CardFooter>
                </FrontCard>

                <BackCard onPress={() => this.card.flip()}>
                    <Text>Back</Text>
                </BackCard>
            </CardFlip>
        </Container>
    )
}