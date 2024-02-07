import { createAsyncThunk } from '@reduxjs/toolkit';

import { logout } from './auth/reducer';
import { resetUnregisteredData } from './survies/reducer';
import { axiosInstance } from '../utils/Axios/instance';
import { resetDate } from './common/reducer';

export const logoutThunk = createAsyncThunk(
  'common/logoutThunk',
  async (_, { dispatch }) => {
    dispatch(resetUnregisteredData());
    dispatch(resetDate());
    dispatch(logout());
  }
);

export const postConsultation = createAsyncThunk(
  'postConsultation',
  async (nazId: string) => {
    const empId = localStorage.getItem('empId');
    return (
      await axiosInstance.post(
        `/assignment/${nazId}/consultation`,
        {},
        {
          params: { empId },
        }
      )
    ).data as string;
  }
);
