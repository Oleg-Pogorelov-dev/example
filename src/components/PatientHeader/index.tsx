import { memo } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import Icons from '@/utils/icons';
import UserInfo from '@/widgets/UserInfo';
import usePatientHeader from '@/utils/hooks/usePatientHeader';
import { useAppDispatch } from '@/store/store';
import { getMedicalHistory } from '@/store/common/thunks';
import { checkAuthThunk } from '@/store/auth/thunks';

import * as S from './styles';

interface HeaderProps {
  onRefreshClick: () => void;
  showBasket?: boolean;
}

const PatientHeader = ({ onRefreshClick }: HeaderProps) => {
  const location = useLocation().pathname;
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const { ehrCaseId } = useParams();

  const { onLogoClick } = usePatientHeader(onRefreshClick);

  const navRs = () => nav(`/medhistory/${ehrCaseId}/rehabilitation`);
  const navHistory = async () => {
    const userInfo = await dispatch(checkAuthThunk()).unwrap();

    dispatch(
      getMedicalHistory({
        ehrCaseId,
        token: userInfo.userProfileByProfileId.token,
      })
    );
  };

  return (
    <S.Header>
      <S.LogoWrapper>
        <S.MobileLogo onClick={onLogoClick} />
        <S.Logo onClick={onLogoClick} />
      </S.LogoWrapper>
      <S.Settings>
        <>
          {!location.includes('medhistory') && (
            <S.HeaderButton onClick={navRs}>РС</S.HeaderButton>
          )}
          {!location.includes('medhistory') && (
            <S.HeaderButton onClick={navHistory}>ИБ</S.HeaderButton>
          )}
          <S.StyledLink
            onClick={() =>
              location.includes('medhistory') ? nav(-1) : nav('/')
            }
          >
            <Icons.Close size={50} />
          </S.StyledLink>
          <UserInfo />
        </>
      </S.Settings>
    </S.Header>
  );
};

export default memo(PatientHeader);
