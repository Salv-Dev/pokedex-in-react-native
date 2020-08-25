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
    color: #fff;
    width: 320px;
    height: 550px;
    background: #202020;
    border-radius: 8px;
`

export  const CardHeader = styled.View``

export  const ItemId = styled.Text`
    color: #fff;
    font-size: 16px;
`

export  const ItemTitle = styled.Text`
    color: #fff;
    font-size: 22px;
    font-weight: bold;
    margin-top: 5px;
`

export  const CardBody = styled.View`
    margin-top: 40px;
`

export  const ItemLoc = styled.View`
    flex-direction: row;
    position: absolute;
    top: 50px;
    left: -38px;
    transform: rotate(270deg);
`

export  const Span = styled.Text`
    font-size: 14px;
    color: #fff;
    font-weight: bold;
`

export  const Loc = styled.Text`
    font-size: 14px;
    color: #fff;
`

export  const ItemInfos = styled.View`
    margin: 50px 0 0 50px;
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
