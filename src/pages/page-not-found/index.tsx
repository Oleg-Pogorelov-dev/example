import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { resetDate, setModalClose } from '@/store/common/reducer';
import { useAppDispatch } from '@/store/store';
import { resetUnregisteredData } from '@/store/survies/reducer';

import * as S from './styles';
const PageNotFound: FC = () => {
  const nav = useNavigate();

  const onButtonClick = () => {
    nav('/', { replace: true });
  };

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(resetUnregisteredData());
    dispatch(resetDate());
    dispatch(setModalClose());
  }, []);

  return (
    <S.Wrapper>
      <S.Content>
        <S.ErrorCode>404</S.ErrorCode>
        <S.Text>Страница которую вы ищете не была найдена</S.Text>
        <S.StyledButton onClick={onButtonClick} variant='blue'>
          Назад
        </S.StyledButton>
      </S.Content>
    </S.Wrapper>
  );
};

export default PageNotFound;
