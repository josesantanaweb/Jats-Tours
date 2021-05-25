import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import Text from '../../Text';
import Input from '../../Input';
import Button from '../../Button';
import airports from '../../../data/airports.json';

import {toCountrySelector} from '../../../redux/selectors/country';
import {setToCountry} from '../../../redux/actions/country';

import * as S from './styles';

const CityToModal = ({isModalVisible, closeModal}) => {
  const toCountry = useSelector(toCountrySelector);
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
      <S.CityToModal>
        <View>
          <S.Header>
            <View style={{marginBottom: 10}}>
              <Text color="white" size="normal">
                Destino
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
                  active={toCountry.iata === item.iata}
                  key={index}
                  onPress={() => {
                    dispatch(setToCountry(item));
                  }}>
                  <S.Iata>
                    <S.IataText>{item.iata}</S.IataText>
                  </S.Iata>
                  <View>
                    <Text
                      color={toCountry.iata === item.iata ? 'white' : 'primary'}
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
      </S.CityToModal>
    </Modal>
  );
};

export default CityToModal;
