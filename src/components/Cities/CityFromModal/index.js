import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import Text from '../../Text';
import Input from '../../Input';
import Button from '../../Button';
import airports from '../../../data/airports.json';

import {fromCountrySelector} from '../../../redux/selectors/country';
import {setFromCountry} from '../../../redux/actions/country';

import * as S from './styles';

const CityFromModal = ({isModalVisible, closeModal}) => {
  const fromCountry = useSelector(fromCountrySelector);
  const dispatch = useDispatch();
  const [countries, setCountries] = useState([]);
  const [countryMatch, setCountryMatch] = useState([]);

  useEffect(() => {
    const loadCountries = async () => {
      setCountries(airports);
    };
    loadCountries();
  }, []);

  const searchCountries = text => {
    if (text.length > 2) {
      let matches = countries.filter(country => {
        const regex = new RegExp(`${text}`, 'gi');
        return country.region_name.match(regex) || country.iata.match(regex);
      });
      setCountryMatch(matches);
    } else {
      setCountryMatch([]);
    }
  };

  return (
    <Modal
      isVisible={isModalVisible}
      swipeDirection="down"
      style={{justifyContent: 'flex-end', margin: 0}}>
      <S.CityFromModal>
        <View>
          <S.Header>
            <View style={{marginBottom: 10}}>
              <Text color="white" size="normal">
                Origen
              </Text>
            </View>
            <Input
              placeholder="Volar desde"
              only
              onChangeText={text => searchCountries(text)}
            />
          </S.Header>
          <S.Items>
            {countryMatch &&
              countryMatch.map((item, index) => (
                <S.Item
                  active={fromCountry.iata === item.iata}
                  key={index}
                  onPress={() => {
                    dispatch(setFromCountry(item));
                  }}>
                  <S.Iata>
                    <S.IataText>{item.iata}</S.IataText>
                  </S.Iata>
                  <View>
                    <Text
                      color={
                        fromCountry.iata === item.iata ? 'white' : 'primary'
                      }
                      size="normal"
                      weight="bold">
                      {item.region_name}
                    </Text>
                    <Text size="small">{item.airport}</Text>
                  </View>
                </S.Item>
              ))}
          </S.Items>
        </View>
        <S.Footer>
          <Button label="Hecho" onPress={closeModal} />
        </S.Footer>
      </S.CityFromModal>
    </Modal>
  );
};

export default CityFromModal;
