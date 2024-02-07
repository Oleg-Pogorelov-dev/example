import { FC } from 'react';

import { MODAL_DEFAULT_CONFIG } from '@/utils/Static/modal';
import ModalContentWrapper from '../ModalContentWrapper';

import * as S from './styles';

interface CustomModalProps {
  isModalOpen: boolean;
  onModalCancel: () => void;
  title?: string;
  children: JSX.Element;
  className?: string;
  hideCloseButton?: boolean;
}

const CustomModal: FC<CustomModalProps> = ({
  isModalOpen,
  onModalCancel,
  children,
  title,
  className,
  hideCloseButton,
}) => {
  return (
    <S.StyledModal
      open={isModalOpen}
      onCancel={onModalCancel}
      {...MODAL_DEFAULT_CONFIG}
      className={className}
    >
      <ModalContentWrapper
        title={title}
        onModalCancel={onModalCancel}
        hideCloseButton={hideCloseButton}
      >
        {children}
      </ModalContentWrapper>
    </S.StyledModal>
  );
};

export default CustomModal;
