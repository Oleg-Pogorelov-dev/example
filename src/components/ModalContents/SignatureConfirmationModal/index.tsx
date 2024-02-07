import { FC } from 'react';
import { useAppDispatch } from '@/store/store';
import { setModalClose } from '@/store/common/reducer';
import * as S from './styles';

const SignatureConfirmationModal: FC = ({}) => {
  const dispatch = useAppDispatch();

  const onComplete = () => {
    dispatch(setModalClose());
  };

  return (
    <S.Wrapper>
      <p>Создан протокол ухода за катетером</p>
      <S.StyledButton variant="borderless" onClick={onComplete}>
        Подписать
      </S.StyledButton>
    </S.Wrapper>
  );
};

export default SignatureConfirmationModal;
