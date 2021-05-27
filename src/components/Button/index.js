import React from 'react';
import PropTypes from 'prop-types';
import {Wrapper, Label, Icon} from './styles';

const Button = ({label, color, disabled, onPress, icon, ...props}) => {
  return (
    <Wrapper onPress={onPress} color={color} disabled={disabled} {...props}>
      {icon && <Icon source={require('../../assets/img/google-plus.png')} />}
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
