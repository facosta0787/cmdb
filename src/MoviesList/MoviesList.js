import React from 'react'
import { FlatList } from 'react-native'
import MovieItem from './components/MovieItem'

const MoviesList = ({ movies }) => {
  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => <MovieItem {...item} />}
      numColumns={3}
      keyExtractor={item => item.id}
    />
  )
}

export default MoviesList
