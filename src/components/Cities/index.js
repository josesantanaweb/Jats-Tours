import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import City from './City';
import CityToModal from './CityToModal';
import CityFromModal from './CityFromModal';

import {
  toCountrySelector,
  fromCountrySelector,
} from '../../redux/selectors/country';

import * as S from './styles';

const Cities = ({change}) => {
  const toCountry = useSelector(toCountrySelector);
  const fromCountry = useSelector(fromCountrySelector);
  const [isToModalVisible, setToModalVisible] = useState(false);
  const [isFromModalVisible, setFromModalVisible] = useState(false);
  const openFromModal = () => setFromModalVisible(true);
  const closeFromModal = () => setFromModalVisible(false);
  const openToModal = () => setToModalVisible(true);
  const closeToModal = () => setToModalVisible(false);
  return (
    <S.Cities>
      <City label="De" onPress={openFromModal} country={fromCountry} />
      <S.Change
        source={require('../../assets/img/change.png')}
        onClick={change}
      />
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
