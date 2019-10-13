import React from 'react';
import {FlatList} from 'react-native';
import MovieItem from './components/MovieItem';

const MoviesList = ({movies}) => {
  return (
    <FlatList
      data={movies.slice(0, 51)}
      renderItem={({item}) => <MovieItem {...item} />}
      numColumns={3}
      keyExtractor={item => item.id}
    />
  );
};

export default MoviesList;
