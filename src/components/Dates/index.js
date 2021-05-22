import React, {useContext, useState} from 'react';
import {useSelector} from 'react-redux';
import {ThemeContext} from 'styled-components';
import Date from './Date';
import FromDateModal from './FromDateModal';
import ToDateModal from './ToDateModal';

import {fromDateSelector, toDateSelector} from '../../redux/selectors/dates';
import {onewaySelector} from '../../redux/selectors/flightType';

import * as S from './styles';

const Dates = () => {
  const fromDate = useSelector(fromDateSelector);
  const toDate = useSelector(toDateSelector);
  const oneway = useSelector(onewaySelector);
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
        date={fromDate}
        label="Salida"
        style={{
          borderRightWidth: 1,
          borderRightColor: colors.graylight,
        }}
      />
      <Date
        label="Vuelta"
        onPress={openToModal}
        date={toDate}
        disabled={oneway}
      />
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
