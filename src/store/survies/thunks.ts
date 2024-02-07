import { createAsyncThunk } from '@reduxjs/toolkit';
import { UUID } from 'crypto';

import { TablePatient } from '@/utils/types/column';
import { axiosInstance } from '@/utils/Axios/instance';

export const getAssignmentThunk = createAsyncThunk<
  TablePatient[],
  string | null
>('assignment/getAssignmentThunk', async (onDate) => {
  const profileId = localStorage.getItem('profileId') as UUID;

  const data = await axiosInstance.get(`assignment/list`, {
    params: { onDate, profileId },
  });
  return data.data as TablePatient[];
});
