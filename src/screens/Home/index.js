import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import Container from '../../components/Container';
import Cities from '../../components/Cities';
import Button from '../../components/Button';
import Options from '../../components/Options';
import Dates from '../../components/Dates';
import Passengers from '../../components/Passengers';
import Class from '../../components/Class';

import * as S from './styles';

const Home = ({active}) => {
  const {colors} = useContext(ThemeContext);
  const onSubmit = () => {
    console.log('submit');
  };
  return (
    <Container>
      <S.Top>
        <S.Cover source={require('../../assets/img/cover.png')} />
        <S.TopInner>
          <S.Logo source={require('../../assets/img/logo-white.png')} />
          <Options />
          <Cities />
        </S.TopInner>
      </S.Top>
      <S.Bottom>
        <S.BottomInner>
          <Dates />
          <S.BottomContent>
            <Passengers
              style={{
                borderRightWidth: 1,
                borderRightColor: colors.graylight,
              }}
            />
            <Class />
          </S.BottomContent>
        </S.BottomInner>
        <Button label="Enviar" onPress={onSubmit} />
      </S.Bottom>
    </Container>
  );
};

export default Home;
