import styled from 'styled-components'
import { MaterialIcons } from '@expo/vector-icons'

export const Icon = styled(MaterialIcons).attrs((props) => ({
    name: "touch-app",
    size: 22,
    color: props.theme.colors.backgroundColor,
}))``

export const BackCard = styled.TouchableOpacity.attrs(() => ({
    activeOpacity: 1,
}))`
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.fontColor};
    width: 320px;
    height: 550px;
    padding: 5px 25px;
    background: ${props => props.theme.colors.backgroundCard};
    border-radius: 8px;
    elevation: 8;
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
    color: ${props => props.styles.fontColor};
    padding: 2px 20px;
    margin: 0 5px 5px 0;
    border-radius: 15px;
    background: ${props => props.styles.backgroundCard};
    elevation: 8;
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
    color: ${props => props.theme.colors.fontColor};
    margin-top: 15px;
`