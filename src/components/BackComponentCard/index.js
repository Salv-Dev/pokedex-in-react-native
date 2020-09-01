import React, { useContext } from 'react'
import PokeContext from './../../PokeContext'

import { BackCard, ItemType, Type, MoreInfo, InfoText, ContainerStats, Stat, Title, CardContainer, Icon } from './styles'

export default function({ flip, item }) {
    const content = useContext(PokeContext)

    return (
        <BackCard onPress={flip}>
            <CardContainer>
                <ItemType>
                    {item.type.map((type, index) => (
                        <Type
                            key={index}
                            styles={content.colors.filter(color => color.type == type.toLowerCase())[0]}
                        >{type}</Type>
                    ))}
                </ItemType>
                <Title>Base Stats:</Title>
                <ContainerStats>
                    <Stat>HP: {item.base.HP}</Stat>
                    <Stat>ATTACK: {item.base.Attack}</Stat>
                    <Stat>DEFENSE: {item.base.Defense}</Stat>
                    <Stat>SP. ATACK: {item.base['Sp. Attack']}</Stat>
                    <Stat>SP.DEFENSE: {item.base['Sp. Defense']}</Stat>
                    <Stat>SPEED: {item.base.Speed}</Stat>
                </ContainerStats>
                <MoreInfo>
                    <InfoText>More info</InfoText>
                    <Icon />
                </MoreInfo>
            </CardContainer>
        </BackCard>
    )
}