import React from 'react';
import {View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Modal from '../../Modal';
import Text from '../../Text';
import Textarea from '../../Textarea';

import {commentsSelector} from '../../../redux/selectors/comments';
import {setComments} from '../../../redux/actions/comments';

import * as S from './styles';

const CommentsModal = ({isModalVisible, closeModal}) => {
  const comments = useSelector(commentsSelector);
  const dispatch = useDispatch();
  console.log(comments);
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
        <Textarea
          onChangeText={text => dispatch(setComments(text))}
          value={comments}
        />
      </S.CommentsModal>
    </Modal>
  );
};

export default CommentsModal;
