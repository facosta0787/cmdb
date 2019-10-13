import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';
import Title from './components/Title';
import Searcher from '../../Searcher';
import MoviesList from '../../MoviesList';

import {movies} from '../../../data/movies.json';

import {
  ScreenContainer,
  HeaderContainer,
  Button,
  ButtonContent,
  Content,
} from './styles';

const Home = () => {
  const getFilteredMovies = () => {
    if (searchValue.trim() === '') {
      return _.orderBy(movies, ['year', 'rating'], ['desc', 'desc']).slice(
        0,
        20,
      );
    }
    return _.orderBy(
      movies.filter(movie => {
        return (
          movie.title
            .toLowerCase()
            .includes(searchValue.toLowerCase().trim()) ||
          movie.year.toLowerCase().includes(searchValue.toLowerCase().trim())
        );
      }),
      ['year', 'rating'],
      ['desc', 'desc'],
    );
  };

  const [searchValue, setSearchValue] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(getFilteredMovies());

  const handleSearchInputChange = ({nativeEvent}) => {
    const {text} = nativeEvent;
    setSearchValue(text);
  };

  const handleSearchInputSubmit = () => {
    setFilteredMovies(getFilteredMovies());
  };

  return (
    <ScreenContainer>
      <HeaderContainer>
        <Button>
          <ButtonContent borderSide="right">
            <Icon name="bars" size={20} color={'#9FA9B3'} />
          </ButtonContent>
        </Button>
        <Searcher
          value={searchValue}
          onChange={handleSearchInputChange}
          onSubmit={handleSearchInputSubmit}
        />
      </HeaderContainer>
      <Content>
        <Title>Películas</Title>
        <MoviesList movies={filteredMovies} />
      </Content>
    </ScreenContainer>
  );
};

export default Home;
