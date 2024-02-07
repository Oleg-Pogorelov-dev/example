import { AxiosError } from 'axios';
import moment from 'moment';
import { AnyAction, AsyncThunkAction, ThunkDispatch } from '@reduxjs/toolkit';

import { Survies } from '@/store/survies/reducer';
import { message } from './message';
import { TablePatient } from './types/column';
import { Error as ErrorType } from './types/common';
import { normolizedUserProfile, User, UserProfile } from './types/user';
import { RIGHTS_ID, RIGHTS_NAME } from './variables';
import { ScaleData } from './types/scale';
import { PatientData } from './types/patient';
import { SavedIcf } from './types/icf';
import { DOTS_ON_END } from './regexes';
import { ThunkAppDispath } from '../store/store';

export const showPatientInfo = (patient: PatientData) => {
  return `${patient?.age && formatAge(patient.age + '')} ${
    patient?.birth_dt &&
    '(' + moment(new Date(patient?.birth_dt)).format('DD.MM.YYYY') + ')'
  }${patient?.birth_dt && patient?.weight ? ',' : ''} ${
    patient?.weight ? patient?.weight + ' кг' : ''
  }`;
};

export const profilesByRight = (data: User) => {
  const rightId = RIGHTS_ID;
  const rightName = RIGHTS_NAME;

  return data.profiles.filter(
    (profile) =>
      !!profile.rights.find(
        (right) => right.id === rightId || right.name === rightName
      )
  );
};

export const checkProfiles = (data: User) => {
  const userProfile: UserProfile[] = profilesByRight(data);

  if (!userProfile.length && data) {
    message({
      boundTop: true,
      title: 'Доступ запрещен. Обратитесь к администратору',
      type: 'error',
    });

    throw new Error('400');
  }
  return normolizeUserProfiles(userProfile);
};

export const checkLoginProfiles = (data: User) => {
  const userProfile: UserProfile[] = profilesByRight(data);
  if (!userProfile.length && data) {
    throw new Error('400');
  }
  return normolizeUserProfiles(userProfile);
};

export const checkUserProfileByUserId = (
  userProfiles: normolizedUserProfile[]
) => {
  if (!userProfiles.length) throw new Error();
  const userProfileByProfileId = userProfiles.find(
    ({ userProfileId }) =>
      userProfileId === localStorage.getItem('userProfileId')
  );

  if (userProfileByProfileId) {
    const filteredUserProfiles = userProfiles.filter(
      ({ userProfileId }) =>
        userProfileId !== localStorage.getItem('userProfileId')
    );
    return { userProfileByProfileId, filteredUserProfiles };
  } else {
    throw new Error();
  }
};

export const normolizeUserProfiles = (userProfiles: UserProfile[]) =>
  userProfiles.map(
    ({
      employeeId,
      post,
      userProfileId,
      deptID,
      deptName,
      profileID,
      token,
    }: UserProfile) => ({
      employeeId,
      post,
      userProfileId,
      profileId: profileID,
      deptID,
      deptName,
      token,
    })
  );

export const errorHandler = (
  error: AxiosError<ErrorType>,
  boundTop?: boolean
) => {
  message({
    boundTop,
    title:
      error.response?.data.message ||
      'Внутренняя ошибка. Обратитесь к администратору ЕМИАС',
    type: 'error',
  });
  throw new Error((error.response?.status ?? 500).toString());
};

export const filterUnregistered = (state: Survies) => {
  const search = state.filtersFromPanel.search?.toLowerCase();
  const filteredData = state.tableData?.filter((item: TablePatient) => {
    const isSearchFilter = search
      ? item?.fio?.toLowerCase().startsWith(search)
      : true;

    return isSearchFilter;
  });

  return filteredData;
};

export const scalePoints = (scaleValue?: number | null) =>
  scaleValue !== null ? scaleValue : '-';

export const scalePointsSum = (
  scale: ScaleData,
  total: number,
  score: number | null
) => {
  let sum: number | null = null;
  for (const key in scale) {
    if (key.includes('val_') && scale[key] !== null) {
      sum = Number(sum) + Number(scale[key]);
    }
  }

  return sum !== null || score !== null ? `${sum ?? score}/${total}` : '-/-';
};

export const checkPartiallyPoints = (scale: ScaleData) => {
  let hasValue: boolean = false;
  let hasNull: boolean = false;

  for (const key in scale) {
    if (key.includes('val_')) {
      if (scale[key] === null) {
        hasNull = true;
      } else {
        hasValue = true;
      }
    }
  }

  return hasNull && hasValue;
};

export const checkValuesOfScale = (scale: ScaleData) =>
  Object.values(scale).every((val) => val !== null);

export const formatAge = (age: string) => {
  if (age !== '11' && age.slice(-1) === '1') {
    return `${age} год`;
  }
  if (
    !['12', '13', '14'].includes(age.slice(-2)) &&
    ['2', '3', '4'].includes(age.slice(-1))
  ) {
    return `${age} года`;
  }

  return `${age} лет`;
};

export const requestQueue = async (
  thunks: AsyncThunkAction<null, null, {}>[],
  dispatch: ThunkDispatch<null, null, AnyAction>
) => {
  for (let i = 0; i < thunks.length; i++) {
    await dispatch(thunks[i]);
  }
};

export const timeInterpretationText = (range: number) => {
  switch (range) {
    case 0:
      return 'утро';
    case 1:
      return 'день';
    case 2:
      return 'вечер';
    case 3:
      return 'ночь';
    default:
      return '';
  }
};

export const makeInterpretationIcf = (icf: SavedIcf) =>
  [
    icf.codeMkfCode,
    `.${icf.qualifierCode1}`,
    `.${icf.qualifierCode2 || ''}`,
    `.${icf.qualifierCode3 || ''}`,
    `.${icf.qualifierCode4 || ''}`,
  ]
    .join('')
    .replace(DOTS_ON_END, '');

export const partiallyFilledMessage = () =>
  message({
    title: 'Начато заполнение шкалы, необходимо завершить заполнение',
    type: 'error',
  });

export const calculateSum = (obj: ScaleData) => {
  let sum = 0;

  for (const key in obj) {
    if (key.includes('val_')) {
      sum = Number(sum) + Number(obj[key]);
    }
  }

  return sum;
};

export const debounce = ({
  id,
  setId,
  dispatch,
  action,
  delay,
  data,
}: {
  id: ReturnType<typeof setTimeout> | undefined;
  setId: (id: ReturnType<typeof setTimeout>) => void;
  dispatch: ThunkAppDispath;
  action: (data?: any) => any;
  delay: number;
  data?: any;
}) => {
  clearTimeout(id);
  setId(
    setTimeout(() => {
      dispatch(action(data));
    }, delay)
  );
};
