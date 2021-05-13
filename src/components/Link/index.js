import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Link = ({label, disabled, size, uppercase, color, onPress, ...props}) => {
  return (
    <S.Wrapper onPress={onPress} disabled={disabled} {...props}>
      <S.Label size={size} color={color} uppercase={uppercase}>
        {label}
      </S.Label>
    </S.Wrapper>
  );
};

Link.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.string,
  uppercase: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

Link.defaultProps = {
  size: '',
  color: '',
  uppercase: 'capizatize',
  disabled: false,
};

export default Link;
