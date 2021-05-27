import React from 'react';
import {View} from 'react-native';
import Modal from '../../Modal';
import Text from '../../Text';
import Textarea from '../../Textarea';

import * as S from './styles';

const CommentsModal = ({isModalVisible, closeModal}) => {
  return (
    <Modal
      isVisible={isModalVisible}
      closeModal={closeModal}
      swipeDirection="down"
      style={{justifyContent: 'flex-end', margin: 0}}>
      <S.CommentsModal>
        <S.Title>
          <Text weight="bold" size="medium">
            Dejanos tu comentario
          </Text>
        </S.Title>
        <Textarea />
      </S.CommentsModal>
    </Modal>
  );
};

export default CommentsModal;
