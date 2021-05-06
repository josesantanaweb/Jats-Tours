import React from 'react';
import PropTypes from 'prop-types';
import {Wrapper, Label} from './styles';

const Button = ({label, color, disabled, onPress, ...props}) => {
  return (
    <Wrapper onPress={onPress} color={color} disabled={disabled} {...props}>
      <Label color={color}>{label}</Label>
    </Wrapper>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'secondary',
  disabled: false,
};

export default Button;
