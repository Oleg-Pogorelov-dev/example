import { FC } from 'react';
import * as S from './styles';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { modalSelector } from '@/store/common/selector';
import { setModalClose } from '@/store/common/reducer';
import {
  MODAL_CONTENT,
  MODAL_CONTENT_TITLE,
  MODAL_DEFAULT_CONFIG,
} from '@/utils/Static/modal';
import ModalContentWrapper from '../ModalContentWrapper';
import { ModalContenTitle } from '@/utils/types/common';

const Modal: FC = () => {
  const contentName = useAppSelector(modalSelector)!;
  const dispatch = useAppDispatch();
  const onCancel = () => {
    dispatch(setModalClose());
  };

  return (
    <S.Modal open={!!contentName} onCancel={onCancel} {...MODAL_DEFAULT_CONFIG}>
      <ModalContentWrapper
        onModalCancel={onCancel}
        title={MODAL_CONTENT_TITLE[contentName as ModalContenTitle]}
      >
        {MODAL_CONTENT[contentName]}
      </ModalContentWrapper>
    </S.Modal>
  );
};

export default Modal;
