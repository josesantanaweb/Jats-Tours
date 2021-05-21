import React from 'react';
import {useSelector} from 'react-redux';
import DatePicker from 'react-native-date-picker';
import {useDispatch} from 'react-redux';
import Modal from '../../Modal';

import {fromDatesSelector} from '../../../redux/selectors/dates';
import {setFromDate} from '../../../redux/actions/dates';

import * as S from './styles';

const FromDateModal = ({isModalVisible, closeModal}) => {
  const fromDates = useSelector(fromDatesSelector);
  const dispatch = useDispatch();
  return (
    <Modal isVisible={isModalVisible} closeModal={closeModal}>
      <S.FromDateModal>
        <DatePicker
          date={fromDates}
          onDateChange={date => dispatch(setFromDate(date))}
          mode={'date'}
        />
      </S.FromDateModal>
    </Modal>
  );
};

export default FromDateModal;
