import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Text from '../Text';
import PassengersModal from './PassengersModal';
import {View} from 'react-native';

import {passengersSelector} from '../../redux/selectors/passengers';

import * as S from './styles';

const Passengers = ({label, style}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const passengers = useSelector(passengersSelector);
  const {adults, childs, infants} = passengers;
  const passengersNumbers = adults + childs + infants;

  return (
    <S.Passengers style={style} onPress={openModal}>
      <View>
        <Text uppercase="uppercase" style={{marginBottom: 5}}>
          Viajero
        </Text>
        <Text size="small" color="primary" weight="bold">
          {passengersNumbers} {passengersNumbers > 1 ? 'Pasajeros' : 'Pasajero'}
        </Text>
      </View>
      <S.Arrow source={require('../../assets/img/arrow.png')} />
      <PassengersModal
        closeModal={closeModal}
        isModalVisible={isModalVisible}
      />
    </S.Passengers>
  );
};

export default Passengers;
