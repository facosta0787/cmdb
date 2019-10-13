import styled, {css} from 'styled-components/native';

export const ScreenContainer = styled.SafeAreaView`
  flex: 1;
`;

export const HeaderContainer = styled.View`
  height: 50px;
  width: 100%;
  flex-direction: row;
  margin-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #eceff5;
`;

export const Button = styled.TouchableOpacity`
  width: 50px;
`;

const border = side => {
  if (side === 'left') {
    return css`
      border-left-width: 1px;
      border-left-color: #eceff5;
    `;
  }
  if (side === 'right') {
    return css`
      border-right-width: 1px;
      border-right-color: #eceff5;
    `;
  }
  return '';
};

export const ButtonContent = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  ${props => border(props.borderSide)}
`;

export const Content = styled.View`
  flex: 1;
  padding: 8px;
`;

export const TitleWrapper = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
`;

export const TitleBefore = styled.View`
  width: 3px;
  background-color: #408bea;
  margin-right: 10px;
`;

export const Title = styled.Text`
  color: #222d34;
  font-size: 20px;
  font-weight: 500;
`;
