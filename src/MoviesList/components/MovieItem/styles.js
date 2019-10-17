import styled from 'styled-components/native'

export const Container = styled.View`
  position: relative;
  width: 33.3%;
  padding: 5px;
`

export const Poster = styled.Image`
  width: 100%;
  height: 185px;
  resize-mode: contain;
`

export const Title = styled.Text`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 5px;
`

export const Year = styled.Text`
  font-size: 10px;
  color: #757a7d;
`

export const RatingContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-vertical: 5px;
  padding-horizontal: 8px;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 158px;
  right: 5px;
`

export const Rating = styled.Text`
  color: rgba(255, 255, 255, 0.9);
  font-size: 10px;
  margin-left: 5px;
`
