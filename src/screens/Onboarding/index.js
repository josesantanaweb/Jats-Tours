import React, {useContext, useState, useRef, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {ThemeContext} from 'styled-components';
import Container from '../../components/Container';
import Button from '../../components/Button';
import Text from '../../components/Text';
import Link from '../../components/Link';
import * as S from './styles';

const data = [
  {
    title: 'Bienvenido',
    description: 'Comienza a consultar la disponibilidad de tus vuelos',
    img: require('../../assets/img/logox2.png'),
  },
  {
    title: 'Empieza',
    description:
      'Seleciona la ciudad  que quieres visitar e indicanos la fecha en la cual quieres viajar, la clase y la cantidad de pasajeros',
    img: require('../../assets/img/globe.png'),
  },
  {
    title: 'Envia tu Solicitud',
    description:
      'Una ves que ya llenes toda la solicitud tu informacion nos llegara por correo y te responderemos en la breveda posible.',
    img: require('../../assets/img/email.png'),
  },
];

const Onboarding = ({navigation}) => {
  const {colors} = useContext(ThemeContext);
  const flatlistRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const [viewableItems, setViewableItems] = useState([]);

  const handleViewableItemsChanged = useRef(({viewableItems}) => {
    setViewableItems(viewableItems);
  });
  useEffect(() => {
    if (!viewableItems[0] || currentPage === viewableItems[0].index) {
      return;
    }
    setCurrentPage(viewableItems[0].index);
  }, [viewableItems, currentPage]);

  const renderFlatlistItem = ({item}) => {
    return (
      <S.Carousel>
        <S.Next style={{opacity: currentPage == 2 ? 0 : 1}}>
          <Link
            size="normal"
            label="Saltar"
            onPress={() => navigation.navigate('Home')}
          />
        </S.Next>
        <S.Logo source={item.img} />
        <View style={{marginBottom: 20}}>
          <Text size="medium" color="primary" weight="bold">
            {item.title}
          </Text>
        </View>
        <View style={{width: 300}}>
          <S.Description align="center" size="normal">
            {item.description}
          </S.Description>
        </View>
      </S.Carousel>
    );
  };

  return (
    <Container>
      <S.Content>
        <FlatList
          data={data}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.title}
          ref={flatlistRef}
          onViewableItemsChanged={handleViewableItemsChanged.current}
          viewabilityConfig={{viewAreaCoveragePercentThreshold: 100}}
          initialNumToRender={1}
          // extraData={100}
          renderItem={renderFlatlistItem}
        />
        <S.Dots>
          {[...Array(data.length)].map((_, i) => (
            <S.Dot
              key={i}
              style={{
                backgroundColor:
                  i == currentPage ? colors.primary : colors.gray,
              }}
            />
          ))}
        </S.Dots>
      </S.Content>
      <S.Footer style={{opacity: currentPage == 2 ? 1 : 0}}>
        <Button label="Continuar" onPress={() => navigation.navigate('Home')} />
      </S.Footer>
    </Container>
  );
};

export default Onboarding;
