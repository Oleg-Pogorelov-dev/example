import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/store/store';
import CustomModal from '@/components/CustomModal';
import { setCloseProcedureModal } from '@/store/confirmProcedureModal/reducer';
import { isOpenProcedureModalSelector } from '@/store/confirmProcedureModal/selector';
import { procedurePostSelector } from '@/store/procedure/selectors';
import { postProcedures } from '@/store/procedure/thunks';

import * as S from './styles';

const ConfirmProcedureModal: FC = () => {
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const { nazId } = useParams();

  const isModalOpen = useAppSelector(isOpenProcedureModalSelector);
  const procedure = useAppSelector(procedurePostSelector);

  const onCancel = () => {
    dispatch(setCloseProcedureModal());
  };

  const onSubmit = () => {
    dispatch(postProcedures({ data: procedure, nazId }));
    onCancel();
    nav('/');
  };

  return (
    <CustomModal
      isModalOpen={isModalOpen}
      onModalCancel={onCancel}
      title="Сохранить данные процедуры?"
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

export default ConfirmProcedureModal;
