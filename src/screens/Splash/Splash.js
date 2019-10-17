import React from 'react'
import { ActivityIndicator } from 'react-native'
import { ScreenContainer, LogoContainer, StyledLogo } from './styles'

const Splash = () => (
  <ScreenContainer>
    <LogoContainer>
      <StyledLogo source={require('../../assets/img/logo.png')} />
      <ActivityIndicator size="large" color="#408bea" />
    </LogoContainer>
  </ScreenContainer>
)

export default Splash
