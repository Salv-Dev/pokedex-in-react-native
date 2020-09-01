import styled from 'styled-components/native'

export const ItemContainer = styled.TouchableOpacity`
    height: 90px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background: #e8e8e8;
    margin-bottom: 8px;
`

export const ItemInfos = styled.View`
    flex-direction: row;
    align-items: center;
`

export const Img = styled.Image`
    width: 45px;
    height: 45px;
    border-radius: 25px;
    margin-right: 10px;
`

export const ItemName = styled.View``

export const Title = styled.Text`
    color: #121212;
    font-size: 16px;
    font-weight: bold;
`

export const ItemId = styled.Text`
    color: #929aab;
    font-size: 14px;
`

export const ItemTypes = styled.View`
    align-items: flex-start;
    flex-wrap: wrap;
    padding-top: 8px;
`

export const Type = styled.Text`
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    color: ${props => props.styles.fontColor};
    background: ${props => props.styles.backgroundCard};
    padding: 2px 20px;
    border-radius: 25px;
    margin: 2px;
    elevation: 5;
`