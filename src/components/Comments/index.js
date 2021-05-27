import React, {useState} from 'react';
import Text from '../../components/Text';
import CommentsModal from './CommentsModal';

import * as S from './styles';

const Comments = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  return (
    <S.Comments onPress={openModal}>
      <S.Icon source={require('../../assets/img/comment.png')} />
      <Text size="normal">Agregar Comentario</Text>
      <CommentsModal isModalVisible={isModalVisible} closeModal={closeModal} />
    </S.Comments>
  );
};

export default Comments;
