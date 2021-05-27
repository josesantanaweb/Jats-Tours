import React, {useContext} from 'react';
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');
import {useSelector} from 'react-redux';
import Mailer from 'react-native-mail';
import {ThemeContext} from 'styled-components';
import Container from '../../components/Container';
import Button from '../../components/Button';
import Cities from '../../components/Cities';
import Options from '../../components/Options';
import Dates from '../../components/Dates';
import Passengers from '../../components/Passengers';
import Class from '../../components/Class';
import FlexDates from '../../components/FlexDates';
import Comments from '../../components/Comments';

import {flightClassSelector} from '../../redux/selectors/flightClass';
import {flexDatesSelector} from '../../redux/selectors/flexDates';
import {
  fromCountrySelector,
  toCountrySelector,
} from '../../redux/selectors/country';
import {fromDateSelector, toDateSelector} from '../../redux/selectors/dates';
import {
  onewaySelector,
  roundtripSelector,
} from '../../redux/selectors/flightType';
import {passengersSelector} from '../../redux/selectors/passengers';

import * as S from './styles';

const Home = () => {
  const flightClass = useSelector(flightClassSelector);
  const fromCountry = useSelector(fromCountrySelector);
  const fromDate = useSelector(fromDateSelector);
  const toDate = useSelector(toDateSelector);
  const passengers = useSelector(passengersSelector);
  const flexDates = useSelector(flexDatesSelector);
  const oneway = useSelector(onewaySelector);
  const roundtrip = useSelector(roundtripSelector);
  const toCountry = useSelector(toCountrySelector);
  const {colors} = useContext(ThemeContext);
  const sendMail = () => {
    Mailer.mail(
      {
        subject: 'Solicitud de Cotización',
        recipients: ['jetrix1993@gmail.com'],
        ccRecipients: ['jetrix1993@gmail.com'],
        body: `
            <p>Tipo de Vuelo: ${
              oneway ? 'Solo Ida' : roundtrip ? 'Ida y Vuelta' : ''
            }</p>
            <p>Desde: ${fromCountry.region_name}</p>
            <p>Hasta: ${toCountry.region_name}</p>
            <p>
              Pasajeros: ${
                passengers.adults > 1
                  ? passengers.adults + ' Adultos' + ','
                  : passengers.adults + ' Adulto' + ','
              }
              ${
                passengers.childs > 1
                  ? passengers.childs + ' Jóvenes' + ','
                  : passengers.childs < 1
                  ? ''
                  : passengers.childs + ' Joven' + ','
              }
              ${
                passengers.infants > 1
                  ? passengers.infants + ' Infantes' + ','
                  : passengers.infants < 1
                  ? ''
                  : passengers.infants + ' Infante' + ','
              }
            </p>
            <p>Salida: ${moment(fromDate).format('DD')} de ${moment(
          fromDate,
        ).format('MMMM')} del ${moment(fromDate).format('YYYY')}</p>
            
          ${
            roundtrip
              ? '<p>' +
                'Vuelta: ' +
                moment(toDate).format('DD') +
                ' de ' +
                moment(toDate).format('MMMM') +
                ' del ' +
                moment(fromDate).format('YYYY') +
                '</p>'
              : ' '
          }
          <p>Clase: ${flightClass}</p>
          <p>Con Fecha Flexible: ${flexDates ? 'Si' : 'No'}</p>
          `,
        isHTML: true,
      },
      error => console.log(error),
    );
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

            <Class flightClass={flightClass} />
          </S.BottomContent>
          <FlexDates />
          <Comments />
        </S.BottomInner>
        <S.Footer>
          <Button icon label="Enviar" onPress={sendMail} />
        </S.Footer>
      </S.Bottom>
    </Container>
  );
};

export default Home;
