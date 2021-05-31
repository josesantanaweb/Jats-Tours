import React from 'react';
import LottieView from 'lottie-react-native';
import * as S from './styles';

const Loading = () => {
  return (
    <S.Wrapper>
      <LottieView source={require('../../assets/data.json')} autoPlay loop />
    </S.Wrapper>
  );
};

export default Loading;
