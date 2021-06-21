import React, {useContext, useState} from 'react';
import {ThemeContext} from 'styled-components';
import {useDispatch} from 'react-redux';
import Modal from '../../Modal';
import Text from '../../Text';

import {setPassengers} from '../../../redux/actions/passengers';

import * as S from './styles';

const PassengersModal = ({isModalVisible, closeModal}) => {
  const {colors} = useContext(ThemeContext);
  const [adults, setAdults] = useState(1);
  const [childs, setChilds] = useState(0);
  const [infants, setInfants] = useState(0);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  const addAdult = () => setAdults(adults + 1);
  const removeAdult = () => setAdults(adults - 1);
  const addChild = () => setChilds(childs + 1);
  const removeChild = () => setChilds(childs - 1);
  const addInfant = () => setInfants(infants + 1);
  const removeInfant = () => setInfants(infants - 1);

  React.useEffect(() => {
    dispatch(setPassengers({adults, childs, infants}));
    setTotal(adults + childs + infants);
  }, [adults, childs, dispatch, infants]);

  return (
    <Modal isVisible={isModalVisible} closeModal={closeModal}>
      <S.PassengersModal>
        <S.Title>
          <Text weight="bold" size="medium">
            Pasajeros
          </Text>
        </S.Title>
        <S.Row
          style={{borderBottomWidth: 1, borderBottomColor: colors.graylight}}>
          <S.Control onPress={removeAdult} disabled={adults < 1}>
            <S.Icon source={require('../../../assets/img/minus.png')} />
          </S.Control>
          <S.Content>
            <Text weight="bold" size="normal" color="primary">
              {adults} {adults > 1 ? 'Adultos' : 'Adulto'}
            </Text>
            <Text>Por encima de los 12 años</Text>
          </S.Content>
          <S.Control onPress={addAdult} disabled={total > 7}>
            <S.Icon source={require('../../../assets/img/add.png')} />
          </S.Control>
        </S.Row>
        <S.Row
          style={{borderBottomWidth: 1, borderBottomColor: colors.graylight}}>
          <S.Control onPress={removeChild} disabled={childs < 1}>
            <S.Icon source={require('../../../assets/img/minus.png')} />
          </S.Control>
          <S.Content>
            <Text weight="bold" size="normal" color="primary">
              {childs} {childs > 1 ? 'Jóvenes' : 'Joven'}
            </Text>
            <Text>De 2 a 12 años</Text>
          </S.Content>
          <S.Control onPress={addChild} disabled={total > 7}>
            <S.Icon source={require('../../../assets/img/add.png')} />
          </S.Control>
        </S.Row>
        <S.Row>
          <S.Control onPress={removeInfant} disabled={infants < 1}>
            <S.Icon source={require('../../../assets/img/minus.png')} />
          </S.Control>
          <S.Content>
            <Text weight="bold" size="normal" color="primary">
              {infants} {infants > 1 ? 'Infantes' : 'Infante'}
            </Text>
            <Text>Por debajo de los 2 años</Text>
          </S.Content>
          <S.Control onPress={addInfant} disabled={total > 7}>
            <S.Icon source={require('../../../assets/img/add.png')} />
          </S.Control>
        </S.Row>
      </S.PassengersModal>
    </Modal>
  );
};

export default PassengersModal;
