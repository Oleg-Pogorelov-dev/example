import { memo, FC, useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '@/store/store';
import { loginThunk } from '@/store/auth/thunks';
import TextInput from '@/components/Inputs/TextInput';
import { setModalOpen } from '@/store/common/reducer';
import Modal from '@/components/Modal';
import { message } from '@/utils/message';
import * as S from './styles';

interface AuthPageProps {}

const AuthPage: FC<AuthPageProps> = () => {
  const dispatch = useAppDispatch();
  const [fields, setFields] = useState({ username: '', password: '' });
  const [isServerError, setisServerError] = useState(false);
  const [isLoginError, setisLoginError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { userProfiles } = await dispatch(loginThunk(fields)).unwrap();
      if (userProfiles.length === 1) {
        if (!userProfiles[0].employeeId) {
          message({
            title: `Нельзя применить выбранный профиль, т.к. за ним 
               НЕ закреплен действующий сотрудник из штата организации`,
            type: 'error',
          });
        } else {
          navigate('/', { replace: true });
        }
      } else {
        dispatch(setModalOpen('ProfilesLoginModal'));
      }
    } catch (err: any) {
      if (err.message === '400') {
        setisLoginError(true);
      }
      if (err.message === '500') {
        setisServerError(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const onFieldsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setisLoginError(false);
    setisServerError(false);
    setFields((prev) => ({
      ...prev,
      [e.target.name.trim()]: e.target.value.trim(),
    }));
  };

  const refreshPage = () => {
    navigate(0);
  };

  return (
    <S.Wrapper isLoading={isLoading}>
      <Modal />
      <S.StyledLogo onClick={refreshPage} />
      <S.Title>АРМ “Логопед”</S.Title>
      <form onSubmit={onSubmit}>
        <TextInput
          id="username"
          value={fields.username}
          onChange={onFieldsChange}
          label={isLoginError ? undefined : 'Логин'}
          variant="white"
          placeholder=""
          animatedLabel
          error={isLoginError}
        />
        <TextInput
          id="password"
          value={fields.password}
          onChange={onFieldsChange}
          label={isLoginError ? undefined : 'Пароль'}
          type="password"
          variant="white"
          placeholder=""
          animatedLabel
          error={isLoginError}
        />
        <S.Spinner spinning={isLoading}>
          <S.Submit
            variant="blue"
            disabled={!(fields.password && fields.username)}
            type="submit"
          >
            {isServerError || isLoginError ? 'Повторить' : 'Войти'}
          </S.Submit>
        </S.Spinner>
        {isServerError && (
          <S.ErrorNetworkMessage>
            Доступ запрещен. Обратитесь к администратору
          </S.ErrorNetworkMessage>
        )}
        {isLoginError && (
          <S.ErrorLoginMessage>*Неверный логин или пароль</S.ErrorLoginMessage>
        )}
      </form>
    </S.Wrapper>
  );
};

export default memo(AuthPage);
