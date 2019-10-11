import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Title from './components/Title';
import Searcher from '../../Searcher';
import MoviesList from '../../MoviesList';

import {
  ScreenContainer,
  HeaderContainer,
  Button,
  ButtonContent,
  LogoContainer,
  StyledLogo,
  Content,
} from './styles';

const Home = () => {
  const [search, setSearch] = useState(true);

  const toggleSearcher = () => {
    console.log(search);
    setSearch(!search);
  };

  return (
    <ScreenContainer>
      <HeaderContainer>
        <Button>
          <ButtonContent borderSide="right">
            <Icon name="bars" size={20} color={'#9FA9B3'} />
          </ButtonContent>
        </Button>
        <Button onPress={toggleSearcher}>
          <ButtonContent borderSide="left">
            <Icon
              name={search ? 'times' : 'search'}
              size={20}
              color={search ? '#408bea' : '#9FA9B3'}
            />
          </ButtonContent>
        </Button>
      </HeaderContainer>
      <LogoContainer>
        <StyledLogo source={require('../../assets/img/logo.png')} />
      </LogoContainer>
      {search && <Searcher />}
      <Content>
        <Title>Películas</Title>
        <MoviesList />
      </Content>
    </ScreenContainer>
  );
};

export default Home;
