import React, {useState} from 'react';
import Text from '../Text';
import Button from '../Button';

import * as S from './styles';

const Alert = ({closeModal, message}) => {
  return (
    <S.AlertContainer>
      <S.Alert>
        <S.AlertTitle>
          <S.AlertIcon source={require('../../assets/img/error.png')} />
          <Text weight="bold" size="medium" color="primary">
            Hubo un Error
          </Text>
        </S.AlertTitle>
        <S.AlertDescription>
          <S.AlertType size="normal">{message}</S.AlertType>
        </S.AlertDescription>
        <Button label="Cerrar" onPress={closeModal} />
      </S.Alert>
    </S.AlertContainer>
  );
};

export default Alert;
