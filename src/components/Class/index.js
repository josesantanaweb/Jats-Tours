import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import ClassModal from './ClassModal';
import {View} from 'react-native';

import * as S from './styles';

const Class = ({style, flightClass}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <S.Class style={style} onPress={openModal}>
      <View>
        <Text uppercase="uppercase" style={{marginBottom: 5}}>
          Clase
        </Text>
        <Text size="small" color="primary" weight="bold">
          {flightClass}
        </Text>
      </View>
      <S.Arrow source={require('../../assets/img/arrow.png')} />
      <ClassModal
        closeModal={closeModal}
        isModalVisible={isModalVisible}
        flightClass={flightClass}
      />
    </S.Class>
  );
};

Class.propTypes = {
  flightClass: PropTypes.string.isRequired,
};

export default Class;
