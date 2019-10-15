/* eslint-disable curly */
import React from 'react';
import {Alert} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import Home from './screens/Home';
import Splash from './screens/Splash';
import {fetchMovies} from './graphql/queries';

const App = () => {
  const {loading, error, data} = useQuery(fetchMovies);

  if (loading) return <Splash />;
  if (error) return Alert.error('Hubo un error obteniendo las peliculas');
  return <Home movies={data.getMovies} />;
};

export default App;
