import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Table } from 'antd';

import { userProfilesSelector } from '@/store/auth/selectors';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { checkAuthThunk } from '@/store/auth/thunks';
import { userProfilesColumns } from '@/utils/Static/common';
import { resetDate, setModalClose } from '@/store/common/reducer';
import { setActiveProfile } from '@/store/auth/reducer';
import CustomModal from '@/components/CustomModal';
import { MODAL_DEFAULT_CONFIG } from '@/utils/Static/modal';
import { resetUnregisteredData } from '@/store/survies/reducer';
import WarningModalContent from '../WarningModalContent';

import * as S from './styles';

const ProfilesModal: FC = () => {
  const userProfiles = useAppSelector(userProfilesSelector);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const location = useLocation().pathname;
  const dataSource = userProfiles.map(({ deptName, post, employeeId }) => ({
    deptName,
    post,
    key: employeeId,
  }));

  const onClick = (rowIndex?: number) => {
    setActiveIndex(rowIndex ?? null);
    setIsModalOpen(true);
  };

  const onCancel = () => {
    setIsModalOpen(false);
  };

  const onSubmit = () => {
    if (Number.isInteger(activeIndex)) {
      dispatch(setActiveProfile(activeIndex));
    }
    setIsModalOpen(false);
    dispatch(setModalClose());
    dispatch(resetUnregisteredData());
    dispatch(resetDate());
  };

  const checkAuth = async () => {
    try {
      setIsLoading(true);
      await dispatch(checkAuthThunk());
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, [location]);

  return (
    <S.Wrapper>
      <CustomModal
        {...MODAL_DEFAULT_CONFIG}
        isModalOpen={isModalOpen}
        onModalCancel={onCancel}
      >
        <WarningModalContent onSubmit={onSubmit} onCancel={onCancel} />
      </CustomModal>
      <Table
        loading={{
          spinning: isLoading,
          indicator: <S.Spinner />,
          delay: 350,
        }}
        onRow={(_, rowIndex) => {
          return {
            onClick: () => {
              onClick(rowIndex);
            },
          };
        }}
        columns={userProfilesColumns}
        dataSource={dataSource}
        pagination={false}
      />
    </S.Wrapper>
  );
};

export default ProfilesModal;
