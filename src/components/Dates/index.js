import React, {useContext, useState} from 'react';
import {useSelector} from 'react-redux';
import {ThemeContext} from 'styled-components';
import Date from './Date';
import FromDateModal from './FromDateModal';
import ToDateModal from './ToDateModal';

import {fromDatesSelector, toDatesSelector} from '../../redux/selectors/dates';

import * as S from './styles';

const Dates = () => {
  const fromDates = useSelector(fromDatesSelector);
  const toDates = useSelector(toDatesSelector);
  const [isFromModalVisible, setFromModalVisible] = useState(false);
  const [isToModalVisible, setToModalVisible] = useState(false);
  const {colors} = useContext(ThemeContext);
  const openFromModal = () => setFromModalVisible(true);
  const closeFromModal = () => setFromModalVisible(false);
  const openToModal = () => setToModalVisible(true);
  const closeToModal = () => setToModalVisible(false);
  return (
    <S.Dates>
      <Date
        onPress={openFromModal}
        date={fromDates}
        label="Salida"
        style={{
          borderRightWidth: 1,
          borderRightColor: colors.graylight,
        }}
      />
      <Date label="Vuelta" onPress={openToModal} date={toDates} />
      <FromDateModal
        closeModal={closeFromModal}
        isModalVisible={isFromModalVisible}
      />
      <ToDateModal
        closeModal={closeToModal}
        isModalVisible={isToModalVisible}
      />
    </S.Dates>
  );
};

export default Dates;
