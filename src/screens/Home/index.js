import React, {useContext, useState} from 'react';
import {useSelector} from 'react-redux';
import {ThemeContext} from 'styled-components';
import Container from '../../components/Container';
import Cities from '../../components/Cities';
import Options from '../../components/Options';
import Dates from '../../components/Dates';
import Passengers from '../../components/Passengers';
import Class from '../../components/Class';
import FlexDates from '../../components/FlexDates';

import {flightClassSelector} from '../../redux/selectors/flightClass';

import * as S from './styles';

const Home = () => {
  const flightClass = useSelector(flightClassSelector);
  const {colors} = useContext(ThemeContext);
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

            <Class flightClass={flightClass} />
          </S.BottomContent>
          <FlexDates />
          {/* <Text size="large">{month(date)}</Text>
          <Text size="large">{dayLabel(date)}</Text>
          <Text size="large">{day(date)}</Text> */}
        </S.BottomInner>
        {/* <Button label="Enviar" onPress={openModal} /> */}
      </S.Bottom>
    </Container>
  );
};

export default Home;
