import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {setOneway, setRoundtrip} from '../../redux/actions/flightType';
import {
  onewaySelector,
  roundtripSelector,
} from '../../redux/selectors/flightType';

import * as S from './styles';

const Options = () => {
  const dispatch = useDispatch();
  const oneway = useSelector(onewaySelector);
  const roundtrip = useSelector(roundtripSelector);
  const onewayHandle = () => {
    dispatch(setOneway(true));
    dispatch(setRoundtrip(false));
  };
  const roundtripHandle = () => {
    dispatch(setRoundtrip(true));
    dispatch(setOneway(false));
  };
  return (
    <S.Options>
      <S.Option onPress={onewayHandle} active={oneway}>
        <S.OptionText active={oneway}>Solo Ida</S.OptionText>
      </S.Option>
      <S.Option onPress={roundtripHandle} active={roundtrip}>
        <S.OptionText active={roundtrip}>Ida y Vuelta</S.OptionText>
      </S.Option>
    </S.Options>
  );
};

export default Options;
