import gql from 'graphql-tag'

export const fetchMovies = gql`
  query fetchMovies {
    getMovies {
      id
      title
      synopsis
      year
      rating
      genres
      posterUrl
      url
    }
  }
`
