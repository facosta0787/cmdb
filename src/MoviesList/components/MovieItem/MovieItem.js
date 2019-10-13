import React from 'react';
import {TouchableOpacity, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  Poster,
  Title,
  Year,
  RatingContainer,
  Rating,
} from './styles';

const MovieItem = props => {
  return (
    <Container>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(props.url);
        }}>
        <Poster
          source={{
            uri: props.posterUrl,
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
  );
};

export default MovieItem;
