import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background: #121212;
    justify-content: center;
    align-items: center;
`

export const FrontCard = styled.TouchableOpacity.attrs(() => ({
    activeOpacity: 1,
}))`
    justify-content: center;
    color: #fff;
    width: 320px;
    height: 550px;
    background: #202020;
    padding: 5px 25px;
    border-radius: 8px;
    box-shadow: 10px 5px 5px black;
`

export const BackCard = styled.TouchableOpacity.attrs(() => ({
    activeOpacity: 1,
}))`
    justify-content: center;
    align-items: center;
    color: #fff;
    width: 320px;
    height: 550px;
    padding: 5px 25px;
    background: #202020;
    border-radius: 8px;
`

export  const CardHeader = styled.View``

export  const ItemId = styled.Text`
    color: #fff;
    font-size: 16px;
    font-style: italic;
`

export const ItemTitle = styled.Text`
    color: #fff;
    font-size: 40px;
    font-weight: bold;
    font-style: italic;
`

export const BaseXp = styled.Text`
    font-size: 14px;
    font-weight: bold;
    font-style: italic;
    margin: -10px 0 0 10px;
    color: #505050;
`

export  const CardBody = styled.View`
    margin-top: 20px;
`

export  const ItemType = styled.View`
    width: 150px;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 10px;
`

export  const Type = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    padding: 2px 20px;
    margin: 0 5px 5px 0;
    border-radius: 15px;
    background: #f54275;
`

export  const ItemInfos = styled.View`
    margin: 40px 0 0 50px;
`

export  const Info = styled.Text`
    font-size: 14px;
    color: #fff;
`

export  const CardFooter = styled.View`
    margin-top: 40px;
    align-items: center;
`

export  const ItemImage = styled.Image`
    width: 250px;
    height: 250px;
`

export  const MoreInfo = styled.TouchableOpacity`
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`

export const InfoText = styled.Text`
    font-size: 16px;
    color: #424242;
    margin-right: 5px;
    font-weight: bold;
`

export const CardContainer = styled.View`
    width: ${ 320 / 2}px;
`

export const ContainerStats = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    width: 135px;
    margin: 5px 0 0 0;
`

export const Stat = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: #121212;
    padding: 5px;
    margin: 0 5px 5px 0;
    background: #fff;
    border-radius: 4px;
`

export const Title = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    margin-top: 15px;
`

export const ContainerAbilities = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    margin: 5px 0 10px 0;
`

export const Ability = styled.Text`
    font-size: 12px;
    font-weight: bold;
    padding: 5px;
    background: #fff;
    border-radius: 4px;
    color: #121212;
    margin: 5px 5px 0 0;
`
