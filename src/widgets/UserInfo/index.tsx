import { FC, memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { setModalOpen } from '@/store/common/reducer';
import { useAppDispatch } from '@/store/store';
import { logoutThunk } from '@/store/thunk';
import Icons from '@/utils/icons';

import * as S from './styles';

const UserInfo: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userFirstName = localStorage.getItem('firstName') || '';
  const userSecondName = localStorage.getItem('secondName') || '';
  const userLastName = localStorage.getItem('lastName') || '';
  const userPost = localStorage.getItem('post') || '';
  const userDeptName = localStorage.getItem('deptName') || '';

  const [isPopoverOpened, setPopoverOpened] = useState<boolean>(false);

  const handleLogout = () => {
    dispatch(logoutThunk());
    navigate('/login', { replace: true });
  };

  const changeProfile = () => {
    dispatch(setModalOpen('ProfilesModal'));
    setPopoverOpened(false);
  };

  return (
    <S.PopoverContainer
      open={isPopoverOpened}
      onOpenChange={setPopoverOpened}
      trigger={['click']}
      placement='bottomRight'
      content={
        <>
          <S.PopoverHeader>
            <Icons.Account size={20} />
            <S.PopoverName>
              {userLastName} {userFirstName} {userSecondName}
            </S.PopoverName>
          </S.PopoverHeader>
          <S.PopoverSubtitle>Должность</S.PopoverSubtitle>
          <S.PopoverValue>{userPost}</S.PopoverValue>
          <S.PopoverSubtitle>Отделение</S.PopoverSubtitle>
          <S.PopoverValue>{userDeptName}</S.PopoverValue>
          <S.StyledButton onClick={changeProfile}>
            Изменить Профиль
          </S.StyledButton>
          <S.Logout variant='red' onClick={handleLogout}>
            Выйти
          </S.Logout>
        </>
      }
    >
      <S.Wrapper active={isPopoverOpened}>
        <S.UserInfoContainer>
          <div>
            <S.Name>
              {userLastName} {userFirstName[0]}.{userSecondName[0]}.
            </S.Name>
            <S.Employee>{userPost}</S.Employee>
          </div>
          <S.Chevron />
        </S.UserInfoContainer>
        <S.StyledProfileIcon />
      </S.Wrapper>
    </S.PopoverContainer>
  );
};

export default memo(UserInfo);
