import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import City from './City';
import CityToModal from './CityToModal';
import CityFromModal from './CityFromModal';

import {
  toCountrySelector,
  fromCountrySelector,
} from '../../redux/selectors/country';

import {setToCountry, setFromCountry} from '../../redux/actions/country';

import * as S from './styles';

const Cities = () => {
  const dispatch = useDispatch();
  const toCountry = useSelector(toCountrySelector);
  const fromCountry = useSelector(fromCountrySelector);
  const [isToModalVisible, setToModalVisible] = useState(false);
  const [isFromModalVisible, setFromModalVisible] = useState(false);
  const openFromModal = () => setFromModalVisible(true);
  const closeFromModal = () => setFromModalVisible(false);
  const openToModal = () => setToModalVisible(true);
  const closeToModal = () => setToModalVisible(false);
  const changeCity = () => {
    dispatch(setToCountry(fromCountry));
    dispatch(setFromCountry(toCountry));
  };
  return (
    <S.Cities>
      <City label="De" onPress={openFromModal} country={fromCountry} />
      <S.Change onPress={changeCity}>
        <S.IconChange source={require('../../assets/img/change.png')} />
      </S.Change>
      <City label="A" onPress={openToModal} country={toCountry} />
      <CityFromModal
        isModalVisible={isFromModalVisible}
        closeModal={closeFromModal}
      />
      <CityToModal
        isModalVisible={isToModalVisible}
        closeModal={closeToModal}
      />
    </S.Cities>
  );
};

export default Cities;
