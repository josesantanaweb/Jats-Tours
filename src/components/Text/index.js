import React from 'react';
import PropTypes from 'prop-types';
import {Text as StyledText} from './styles';

const Text = ({children, color, size, weight, align}) => {
  return (
    <StyledText color={color} size={size} weight={weight} align={align}>
      {children}
    </StyledText>
  );
};

Text.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  weight: PropTypes.string,
  children: PropTypes.string.isRequired,
};

Text.defaultProps = {
  weight: '',
  size: 'small',
  disabled: false,
};

export default Text;
