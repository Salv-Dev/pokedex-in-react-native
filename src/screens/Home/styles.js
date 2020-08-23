import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs(() => ({
    showsVerticalScrollIndicator: false
}))`
    background: #222831;
    padding: 25px 10px;
`

export const TitleScreen = styled.Text`
    padding: 0 0 25px 0;
    align-self: center;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
`

export const ItemContainer = styled.View`
    height: 90px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background: #222831;
    border-bottom-width: 1px;
    border-bottom-color: #303845;
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
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`

export const ItemId = styled.Text`
    color: #5b6b85;
    font-size: 14px;
`

export const ItemTypes = styled.View`
    flex-wrap: wrap;
    padding-top: 8px;
`

export const Type = styled.Text`
    font-size: 12px;
    color: #f54275;
    border: 1px solid #f54275;
    padding: 2px 20px;
    border-radius: 25px;
    margin: 2px;
`