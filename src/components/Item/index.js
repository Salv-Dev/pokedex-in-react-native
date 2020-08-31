import React, { memo } from 'react'

import { ItemContainer, ItemInfos, Img, ItemName, Title, ItemId, ItemTypes, Type } from './styles'

import img from './../../../assets/charizard.png'

export default memo(function Item({ navigation, item }) {
    console.log(item.name)
    return (
        <ItemContainer onPress={() => navigation.navigate('Card')}>
                <ItemInfos>
                    <Img source={img} />
                    <ItemName>
                    <Title>{ item.name.english }</Title>
                        <ItemId>#4</ItemId>
                    </ItemName>
                </ItemInfos>
                <ItemTypes>
                    <Type>Fire</Type>
                </ItemTypes>
        </ItemContainer>
    )
})