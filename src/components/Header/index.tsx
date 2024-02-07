import { memo, RefObject } from 'react';
import { useLocation } from 'react-router-dom';
import { DatePicker } from 'antd';
import moment from 'moment';

import Icons from '@/utils/icons';
import useHeader from '@/utils/hooks/useHeader';
import UserInfo from '@/widgets/UserInfo';
import TextInput from '../Inputs/TextInput';
import { useAppDispatch } from '@/store/store';
import { getAssignmentThunk } from '@/store/survies/thunks';
import { setDate } from '@/store/common/reducer';

import * as S from './styles';

interface HeaderProps {
  headerRef?: RefObject<HTMLDivElement>;
  headerSearchRef?: RefObject<HTMLInputElement>;
  onRefreshClick: () => void;
}

const Header = ({
  headerRef,
  headerSearchRef,
  onRefreshClick,
}: HeaderProps) => {
  const {
    onLogoClick,
    isAnimation,
    setIsAnimation,
    onRefreshButtonClick,
    searchFilter,
    date,
    onFilterValueChange,
  } = useHeader(onRefreshClick);
  const dispatch = useAppDispatch();

  const location = useLocation();

  return (
    <S.Header ref={headerRef}>
      <S.LogoWrapper>
        <S.MobileLogo onClick={onLogoClick} />
        <S.Logo onClick={onLogoClick} />
      </S.LogoWrapper>
      <S.SearchContainer hasPadding={!location.pathname.startsWith('/survey')}>
        <TextInput
          inputRef={headerSearchRef}
          autoComplete='off'
          value={searchFilter}
          onChange={onFilterValueChange}
          placeholder='ФИО'
        />
        {searchFilter.length ? (
          <S.CloseIcon
            onClick={() => {
              onFilterValueChange('');
            }}
          />
        ) : (
          <S.SearchIcon />
        )}
      </S.SearchContainer>
      <S.DatePickerWrapper>
        <DatePicker
          style={{ cursor: 'pointer' }}
          inputReadOnly
          allowClear={false}
          value={moment(date)}
          format={'DD.MM.YYYY'}
          onChange={(selectedDate) => {
            dispatch(setDate(moment(selectedDate).format('YYYY-MM-DD')));
            dispatch(
              getAssignmentThunk(moment(selectedDate).format('YYYY-MM-DD'))
            );
          }}
        />
      </S.DatePickerWrapper>
      <S.Settings>
        <S.Reload
          onAnimationEnd={() => setIsAnimation(false)}
          className={isAnimation ? 'fade' : ''}
          onClick={onRefreshButtonClick}
          icon={<Icons.Repeat size={50} />}
        />
        <UserInfo />
      </S.Settings>
    </S.Header>
  );
};

export default memo(Header);
