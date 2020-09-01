import styled from 'styled-components'
import { MaterialIcons } from '@expo/vector-icons'

export const Icon = styled(MaterialIcons).attrs((props) => ({
    name: "touch-app",
    size: 22,
    color: props.theme.colors.backgroundColor,
}))``

export const FrontCard = styled.TouchableOpacity.attrs(() => ({
    activeOpacity: 1,
}))`
    justify-content: center;
    color: ${props => props.theme.colors.fontColor};
    width: 320px;
    height: 550px;
    background: ${props => props.theme.colors.backgroundCard};
    padding: 5px 25px;
    border-radius: 8px;
    elevation: 8;
`

export  const CardHeader = styled.View``

export  const ItemId = styled.Text`
    color: ${props => props.theme.colors.fontColor};
    font-size: 16px;
    font-style: italic;
`

export const ItemTitle = styled.Text`
    color: ${props => props.theme.colors.fontColor};
    font-size: 40px;
    font-weight: bold;
    font-style: italic;
`

export const OtherNameLanguages = styled.Text`
    font-size: 14px;
    font-weight: bold;
    font-style: italic;
    margin-top: -5px;
    color: ${props => props.theme.colors.backgroundColor};
`

export  const CardBody = styled.View`
    margin-top: 20px;
`

export  const ItemInfos = styled.View`
    margin: 40px 0 0 50px;
`

export  const Info = styled.Text`
    font-size: 14px;
    color: ${props => props.theme.colors.fontColor};
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
    color: ${props => props.theme.colors.backgroundColor};
    margin-right: 5px;
    font-weight: bold;
`