import React from 'react';

import {TitleWrapper, TitleBefore, Title} from '../styles';

const TitleComponent = ({children}) => {
  return (
    <TitleWrapper>
      <TitleBefore />
      <Title>{children}</Title>
    </TitleWrapper>
  );
};

export default TitleComponent;
