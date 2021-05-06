import React from 'react';
import {Container as StyledContainer} from './styles';

export const Container = ({children}) => {
  return (
    <StyledContainer
      // eslint-disable-next-line react-native/no-inline-styles
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
      }}>
      {children}
    </StyledContainer>
  );
};

export default Container;
