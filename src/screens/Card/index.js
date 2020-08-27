import React from 'react'
import CardFlip from 'react-native-card-flip'
import { MaterialIcons } from '@expo/vector-icons'

import img from './../../../assets/charizard.png'

import { Container, FrontCard, BackCard, CardHeader, ItemId, ItemTitle, CardBody, ItemType, Type, ItemInfos, Info, CardFooter, ItemImage, MoreInfo, InfoText, ContainerStats, Stat, Title, ContainerAbilities, Ability, CardContainer, BaseXp } from './styles'

export default function Card() {
    return (
        <Container>
            <CardFlip style={{width: 320, height: 550}} ref={(card) => (this.card = card)} >
                <FrontCard onPress={() => this.card.flip()}>
                    <CardHeader>
                        <ItemId>#004</ItemId>
                        <ItemTitle>Charizard</ItemTitle>
                        <BaseXp>Base xp: 240</BaseXp>
                    </CardHeader>
                    <CardBody>
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
                    <CardContainer>
                        <ItemType>
                            <Type>Fire</Type>
                            <Type>Fire</Type>
                            <Type>Fire</Type>
                        </ItemType>
                        <Title>Base Stats:</Title>
                        <ContainerStats>
                            <Stat>HP: 78</Stat>
                            <Stat>ATTACK: 84</Stat>
                            <Stat>DEFENSE: 78</Stat>
                            <Stat>SP. ATACK: 109</Stat>
                            <Stat>SP.DEFENSE: 85</Stat>
                            <Stat>SPEED: 100</Stat>
                        </ContainerStats>
                        <Title>Abilities:</Title>
                        <ContainerAbilities>
                            <Ability>BLAZE</Ability>
                            <Ability>SOLAR-POWER</Ability>
                        </ContainerAbilities>
                        <MoreInfo>
                            <InfoText>More info</InfoText>
                            <MaterialIcons name="touch-app" size={22} color="#424242" />
                        </MoreInfo>
                    </CardContainer>
                </BackCard>
            </CardFlip>
        </Container>
    )
}