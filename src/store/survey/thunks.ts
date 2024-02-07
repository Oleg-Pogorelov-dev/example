import { createAsyncThunk } from '@reduxjs/toolkit';

import { Assignment } from '@/utils/types/patient';
import { axiosInstance } from '@/utils/Axios/instance';

export const getAssignmentNaz = createAsyncThunk(
  'getAssignmentNaz',
  async (nazId: string) => {
    const data = await axiosInstance.get(`assignment/${nazId}`);
    return data.data as Assignment;
  }
);
