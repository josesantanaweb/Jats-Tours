import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import Text from '../../Text';
import Modal from '../../Modal';

import {setFlightClass} from '../../../redux/actions/flightClass';

import * as S from './styles';

const initialClasss = [
  {
    id: 1,
    clase: 'Economica',
  },
  {
    id: 2,
    clase: 'Economica Premium',
  },
  {
    id: 3,
    clase: 'Empresarial',
  },
  {
    id: 4,
    clase: 'Primera Clase',
  },
];

const ClassModal = ({closeModal, isModalVisible, flightClass}) => {
  const dispatch = useDispatch();
  const [clases] = useState(initialClasss);

  function selectOption(id) {
    clases.map(todo => todo.id === id && dispatch(setFlightClass(todo.clase)));
  }

  return (
    <Modal isVisible={isModalVisible} closeModal={closeModal}>
      <S.ClassModal>
        <S.Title>
          <Text weight="bold" size="medium">
            Clase
          </Text>
        </S.Title>
        {clases.map((item, index) => (
          <S.Option
            onPress={() => selectOption(item.id)}
            key={index}
            underlayColor="#FAFAFA">
            <Text
              size="normal"
              color={flightClass === item.clase ? 'primary' : 'secondary'}
              weight={flightClass === item.clase ? 'bold' : ''}>
              {item.clase}
            </Text>
          </S.Option>
        ))}
      </S.ClassModal>
    </Modal>
  );
};

ClassModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isModalVisible: PropTypes.bool.isRequired,
  flightClass: PropTypes.string.isRequired,
};

export default ClassModal;
