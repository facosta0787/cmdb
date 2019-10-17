import React from 'react'
import { TouchableOpacity, Linking, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  Container,
  Poster,
  Title,
  Year,
  RatingContainer,
  Rating
} from './styles'

const MovieItem = props => {
  const handleOpenLink = async () => {
    try {
      const canOpen = await Linking.canOpenURL(props.url)
      if (!canOpen) {
        return Alert.alert('No se puede abrir la URL')
      }
      return Linking.openURL(props.url)
    } catch (err) {
      Alert.alert(err)
    }
  }

  return (
    <Container>
      <TouchableOpacity onPress={handleOpenLink}>
        <Poster
          source={{
            uri: props.posterUrl
          }}
        />
      </TouchableOpacity>
      <RatingContainer>
        <Icon name="star" size={10} color={'#FFD600'} />
        <Rating>{props.rating}</Rating>
      </RatingContainer>
      <Title numberOfLines={1} ellipsizeMode="tail">
        {props.title}
      </Title>
      <Year>{props.year}</Year>
    </Container>
  )
}

export default MovieItem
