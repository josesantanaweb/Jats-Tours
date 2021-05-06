import React from 'react';
import PropTypes from 'prop-types';
import {Container as StyledContainer} from './styles';

const Container = ({children, color}) => {
  return (
    <StyledContainer
      color={color}
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

Container.propTypes = {
  color: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Container;
