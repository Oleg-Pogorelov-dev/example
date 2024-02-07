import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProcedureData, ProcedureDataPost } from '@/utils/types/procedure';
import { axiosInstance } from '@/utils/Axios/instance';

export const getAssignmentProcedure = createAsyncThunk(
  'getAssignmentProcedure',
  async (nazId: string) => {
    const data = await axiosInstance.get(`assignment/${nazId}/procedure`);

    return data.data as ProcedureData;
  }
);

export const postProcedures = createAsyncThunk(
  'postAssignmentProcedure',
  async ({
    data,
    nazId,
  }: {
    data: ProcedureDataPost;
    nazId: string | undefined;
  }) => {
    const empId = localStorage.getItem('empId');
    await axiosInstance.post(`assignment/${nazId}/procedure`, {
      ...data,
      emp_id: empId,
    });
  }
);
