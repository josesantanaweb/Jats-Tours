import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import DatePicker from 'react-native-date-picker';
import Modal from '../../Modal';

import {fromDateSelector} from '../../../redux/selectors/dates';
import {setFromDate} from '../../../redux/actions/dates';

import * as S from './styles';

const FromDateModal = ({isModalVisible, closeModal}) => {
  const fromDate = useSelector(fromDateSelector);
  const dispatch = useDispatch();
  return (
    <Modal isVisible={isModalVisible} closeModal={closeModal}>
      <S.FromDateModal>
        <DatePicker
          date={fromDate}
          onDateChange={date => dispatch(setFromDate(date))}
          mode={'date'}
        />
      </S.FromDateModal>
    </Modal>
  );
};

export default FromDateModal;
