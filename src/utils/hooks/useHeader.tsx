import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import { useAppDispatch, useAppSelector } from '@/store/store';
import { setUregisteredTableFilters } from '@/store/survies/reducer';
import { searchFilterSelector } from '@/store/selectors';
import { dateSelector } from '@/store/common/selector';
import { setDate } from '@/store/common/reducer';

const useHeader = (onRefreshClick: () => void) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const date = useAppSelector(dateSelector);

  const searchFilter = useAppSelector(searchFilterSelector);
  const [isAnimation, setIsAnimation] = useState(false);

  useEffect(() => {
    if (!date) {
      dispatch(setDate(moment(Date()).format('YYYY-MM-DD')));
    }
  }, [date]);

  const onRefreshButtonClick = () => {
    if (!isAnimation) {
      onRefreshClick();
    }
    setIsAnimation(true);
  };

  const onLogoClick = () => {
    navigate(0);
  };

  const onFilterValueChange = (
    data: ChangeEvent<HTMLInputElement> | string
  ) => {
    const value = typeof data === 'string' ? data : data.target.value;
    dispatch(
      setUregisteredTableFilters({
        filterName: 'search',
        value,
      })
    );
  };

  return {
    searchFilter,
    onFilterValueChange,
    onLogoClick,
    onRefreshButtonClick,
    isAnimation,
    setIsAnimation,
    date,
  };
};
export default useHeader;
