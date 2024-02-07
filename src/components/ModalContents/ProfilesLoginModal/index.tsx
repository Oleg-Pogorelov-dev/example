import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table } from 'antd';

import { userProfilesSelector } from '@/store/auth/selectors';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setActiveProfile } from '@/store/auth/reducer';
import { setModalClose } from '@/store/common/reducer';
import { userProfilesColumns } from '@/utils/Static/common';
import { message } from '@/utils/message';

import * as S from './styles';

const ProfilesLoginModal: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userProfiles = useAppSelector(userProfilesSelector);

  const dataSource = userProfiles.map(({ deptName, post, employeeId }) => ({
    deptName,
    post,
    key: employeeId,
  }));

  const onClick = (rowIndex: number | undefined) => {
    if (typeof rowIndex === 'number') {
      if (!userProfiles[rowIndex].employeeId) {
        message({
          title: `Нельзя применить выбранный профиль, т.к. за ним НЕ закреплен 
                  действующий сотрудник из штата организации`,
          type: 'error',
        });
      } else {
        dispatch(setActiveProfile(rowIndex));
        dispatch(setModalClose());
        navigate('/', { replace: true });
      }
    }
  };

  return (
    <S.Wrapper>
      <Table
        onRow={(_, rowIndex) => ({
          onClick: () => onClick(rowIndex),
        })}
        columns={userProfilesColumns}
        dataSource={dataSource}
        pagination={false}
      />
    </S.Wrapper>
  );
};

export default ProfilesLoginModal;
