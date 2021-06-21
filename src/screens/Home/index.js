import React, {useState, useContext, useEffect} from 'react';
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';
import Mailer from 'react-native-mail';
import {AuthContext} from '../../navigation/AuthProvider';
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
import Loading from '../../components/Loading';

import {flightClassSelector} from '../../redux/selectors/flightClass';
import {flexDatesSelector} from '../../redux/selectors/flexDates';
import {commentsSelector} from '../../redux/selectors/comments';
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

import {Linking} from 'react-native';

import * as S from './styles';

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const flightClass = useSelector(flightClassSelector);
  const fromCountry = useSelector(fromCountrySelector);
  const fromDate = useSelector(fromDateSelector);
  const toDate = useSelector(toDateSelector);
  const passengers = useSelector(passengersSelector);
  const flexDates = useSelector(flexDatesSelector);
  const oneway = useSelector(onewaySelector);
  const roundtrip = useSelector(roundtripSelector);
  const toCountry = useSelector(toCountrySelector);
  const comments = useSelector(commentsSelector);
  const {colors} = useContext(ThemeContext);
  const {user, logout} = useContext(AuthContext);

  const getUser = async () => {
    const currentUser = await firestore()
      .collection('users')
      .doc(user.uid)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          setUserData(documentSnapshot.data());
        }
      });
  };

  useEffect(() => {
    getUser();
  });

  useEffect(() => {
    setTimeout(async () => {
      setLoading(false);
    }, 3500);
  }, []);

  if (loading) {
    return <Loading />;
  }

  const sendWhatsapp = () => {
    let url = `whatsapp://send?text=
Solicitud de Cotización
Nombre: ${userData.name}
Email: ${userData.email}
Telefono: ${userData.phone}
Tipo de Vuelo: ${oneway ? 'Solo Ida' : roundtrip ? 'Ida y Vuelta' : ''}
Desde: ${fromCountry.region_name}
Hasta: ${toCountry.region_name}
Pasajeros: ${
      passengers.adults > 1
        ? passengers.adults + ' Adultos' + ','
        : passengers.adults + ' Adulto' + ','
    }${
      passengers.childs > 1
        ? passengers.childs + ' Jóvenes' + ','
        : passengers.childs < 1
        ? ''
        : passengers.childs + ' Joven' + ','
    }${
      passengers.infants > 1
        ? passengers.infants + ' Infantes' + ','
        : passengers.infants < 1
        ? ''
        : passengers.infants + ' Infante' + ','
    }
Salida: ${moment(fromDate).format('DD')} de ${moment(fromDate).format(
      'MMMM',
    )} del ${moment(fromDate).format('YYYY')}
${
  roundtrip
    ? 'Vuelta: ' +
      moment(toDate).format('DD') +
      ' de ' +
      moment(toDate).format('MMMM') +
      ' del ' +
      moment(fromDate).format('YYYY')
    : ' '
}
Clase: ${flightClass}
Con Fecha Flexible: ${flexDates ? 'Si' : 'No'}
Comentarios: ${comments}
    &phone=58 + 4244312121;`;
    Linking.openURL(url)
      .then(data => {
        console.log('WhatsApp Opened successfully ' + data);
      })
      .catch(() => {
        console.log('Make sure WhatsApp installed on your device');
      });
  };

  const sendMail = () => {
    Mailer.mail(
      {
        subject: 'Solicitud de Cotización',
        recipients: ['jatstravelservices@gmail.com'],
        ccRecipients: ['jatstravelservices@gmail.com'],
        body: `
            <p>Nombre: ${userData.name}</p>
            <p>Email: ${userData.email}</p>
            <p>Telefono: ${userData.phone}</p>
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
          <p>Comentarios: ${comments}</p>
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
        <S.LogoutContainer onPress={() => logout()}>
          <S.Logout source={require('../../assets/img/logout.png')} />
        </S.LogoutContainer>
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
          <S.Whatsapp onPress={sendWhatsapp}>
            <S.WhatsappIcon source={require('../../assets/img/whatsapp.png')} />
            <S.WhatsappText color="red">Enviar por Whatsapp</S.WhatsappText>
          </S.Whatsapp>
        </S.BottomInner>
        <S.Footer>
          <Button icon label="Enviar por Gmail" onPress={sendMail} />
        </S.Footer>
      </S.Bottom>
    </Container>
  );
};

export default Home;
