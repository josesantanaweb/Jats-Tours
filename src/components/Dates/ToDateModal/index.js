import React from 'react';
import {useSelector} from 'react-redux';
import DatePicker from 'react-native-date-picker';
import {useDispatch} from 'react-redux';
import Modal from '../../Modal';

import {toDateSelector} from '../../../redux/selectors/dates';
import {setToDate} from '../../../redux/actions/dates';

import * as S from './styles';

const ToDateModal = ({isModalVisible, closeModal}) => {
  const toDate = useSelector(toDateSelector);
  const dispatch = useDispatch();
  return (
    <Modal isVisible={isModalVisible} closeModal={closeModal}>
      <S.ToDateModal>
        <DatePicker
          date={toDate}
          onDateChange={date => dispatch(setToDate(date))}
          mode={'date'}
        />
      </S.ToDateModal>
    </Modal>
  );
};

export default ToDateModal;
