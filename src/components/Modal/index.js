import React from 'react';
import Modal from 'react-native-modal';
import Button from '../Button';
import * as S from './styles';

const Portal = ({isVisible, closeModal, children, styles}) => {
  return (
    <Modal
      styles={styles}
      isVisible={isVisible}
      swipeDirection="down"
      style={{justifyContent: 'flex-end', margin: 0}}>
      <S.Portal>
        {children}
        <Button label="Hecho" onPress={closeModal} />
      </S.Portal>
    </Modal>
  );
};

export default Portal;
