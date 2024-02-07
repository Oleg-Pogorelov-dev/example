import { FC } from 'react';

import CustomModal from '@/components/CustomModal';
import useModalScales from '@/utils/hooks/scaleHooks/useModalScales';

import * as S from './styles';

const ConfirmScalesModal: FC = () => {
  const { isModalOpen, onSubmit, onCancel } = useModalScales();

  return (
    <CustomModal
      isModalOpen={isModalOpen}
      onModalCancel={onCancel}
      title="Завершить обследование?"
      className="confirm-modal"
      hideCloseButton
    >
      <S.Buttons>
        <S.Button onClick={onSubmit}>Да</S.Button>
        <S.Button onClick={onCancel}>Нет</S.Button>
      </S.Buttons>
    </CustomModal>
  );
};

export default ConfirmScalesModal;
