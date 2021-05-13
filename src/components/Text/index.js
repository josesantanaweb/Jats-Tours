import React from 'react';
import PropTypes from 'prop-types';
import {Text as StyledText} from './styles';

const Text = ({children, color, size, weight, align, uppercase, style}) => {
  return (
    <StyledText
      color={color}
      size={size}
      style={style}
      weight={weight}
      align={align}
      uppercase={uppercase}>
      {children}
    </StyledText>
  );
};

Text.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  weight: PropTypes.string,
  uppercase: PropTypes.string,
  children: PropTypes.string.isRequired,
};

Text.defaultProps = {
  weight: '',
  uppercase: 'capitalize',
  size: 'small',
  disabled: false,
};

export default Text;
