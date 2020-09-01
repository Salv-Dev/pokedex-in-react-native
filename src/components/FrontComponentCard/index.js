import React, { useState } from 'react'
import axios from 'axios'

import { FrontCard, CardHeader, ItemId, ItemTitle, OtherNameLanguages, CardBody, ItemInfos, Info, CardFooter, ItemImage, MoreInfo, InfoText, Icon } from './styles'

export default function FrontComponentCard({ flip, item }) {
    const [height, setHeight] = useState()
    const [weight, setweight] = useState()

    axios.get(`https://pokeapi.co/api/v2/pokemon/${item.id}`).then(infos => {
        setHeight(infos.data.height)
        setweight(infos.data.weight)
    })

    const img = { uri: `https://pokeres.bastionbot.org/images/pokemon/${item.id}.png` }

    return (
        <FrontCard onPress={flip} >
            <CardHeader>
                <ItemId>{ item.id < 10? `#00${item.id}` : item.id > 99 ? `#${item.id}` : `#0${item.id}` }</ItemId>
                <ItemTitle>{ item.name.english }</ItemTitle>
                <OtherNameLanguages>{ item.name.japanese } - { item.name.french }</OtherNameLanguages>
            </CardHeader>
            <CardBody>
                <ItemInfos>
                    <Info>Height: {height / 10 || "00"}m</Info>
                    <Info>weight: {weight / 10 || "00"}kg</Info>
                </ItemInfos>
            </CardBody>
            <CardFooter>
                <ItemImage source={img} />
                <MoreInfo>
                    <InfoText>More info</InfoText>
                    <Icon />
                </MoreInfo>
            </CardFooter>
        </FrontCard>

    )
}