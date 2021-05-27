import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import * as S from './styles';

const TextArea = ({value, placeholder, onChangeText, ...props}) => {
  const {colors} = useContext(ThemeContext);
  return (
    <S.Wrapper>
      <S.TextArea
        value={value}
        onChangeText={onChangeText}
        multiline={true}
        numberOfLines={4}
        placeholder={placeholder}
        style={{textAlignVertical: 'top'}}
        {...props}
      />
    </S.Wrapper>
  );
};

export default TextArea;
