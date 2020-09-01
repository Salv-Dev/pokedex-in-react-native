import React, { memo, useContext } from 'react'

import PokeContext from './../../PokeContext'

import { ItemContainer, ItemInfos, Img, ItemName, Title, ItemId, ItemTypes, Type } from './styles'

export default memo(function Item({ navigation, item }) {
    const content = useContext(PokeContext)
    const img = { uri: `https://pokeres.bastionbot.org/images/pokemon/${item.id}.png` }

    return (
        <ItemContainer onPress={() => navigation.navigate('Card', { item })}>
                <ItemInfos>
                    <Img source={img} />
                    <ItemName>
                    <Title>{ item.name.english }</Title>
                    <ItemId>{ item.id < 10? `#00${item.id}` : item.id > 99 ? `#${item.id}` : `#0${item.id}` }</ItemId>
                    </ItemName>
                </ItemInfos>
                <ItemTypes>
                    {item.type.map((type, index) => (
                        <Type
                            key={index}
                            styles={content.colors.filter(color => color.type == type.toLowerCase())[0]}
                        >{type}</Type>
                    ))}
                </ItemTypes>
        </ItemContainer>
    )
})