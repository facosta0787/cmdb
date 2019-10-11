import React from 'react';
import {FlatList} from 'react-native';
import MovieItem from './components/MovieItem';
import {movies} from '../../data/movies.json';

const MoviesList = () => {
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
