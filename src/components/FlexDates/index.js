import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Text from '../../components/Text';

import {flexDatesSelector} from '../../redux/selectors/flexDates';
import {setFlexDates} from '../../redux/actions/flexDates';

import * as S from './styles';

const FlexDates = () => {
  const dispatch = useDispatch();
  const flexDatesActive = useSelector(flexDatesSelector);
  const handleCheckbox = () => {
    dispatch(setFlexDates(!flexDatesActive));
  };
  return (
    <S.FlexDates>
      <S.Checkbox onPress={handleCheckbox}>
        <S.CheckActive active={flexDatesActive} />
      </S.Checkbox>
      <Text color="primary" size="normal">
        Con Fecha Flexible
      </Text>
    </S.FlexDates>
  );
};

export default FlexDates;
