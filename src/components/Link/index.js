import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Link = ({label, disabled, size, onPress, ...props}) => {
  return (
    <S.Wrapper onPress={onPress} disabled={disabled} {...props}>
      <S.Label size={size}>{label}</S.Label>
    </S.Wrapper>
  );
};

Link.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

Link.defaultProps = {
  size: 'small',
  disabled: false,
};

export default Link;
