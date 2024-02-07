import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosInstance } from '@/utils/Axios/instance';
import { IcfCode, Qualifier, SavedCodesPostData } from '@/utils/types/icf';

export const getIcfCodes = createAsyncThunk<IcfCode[], string | undefined>(
  'getIcfCodes',
  async (id) => {
    const data = await axiosInstance.get(`/rs/term/icf`, {
      params: {
        id,
      },
    });

    return data.data as IcfCode[];
  }
);

export const getIcfQualifier = createAsyncThunk<
  Qualifier[],
  { code: string; num: number }
>('getIcfQualifier', async ({ code, num }) => {
  const data = await axiosInstance.get(`/rs/term/icfqualifier`, {
    params: {
      code,
      num,
    },
  });

  return data.data;
});

export const getIcf = createAsyncThunk('getIcf', async (protocolId: string) => {
  const data = await axiosInstance.get(`/rs/mkf`, {
    params: {
      protocolId,
    },
  });

  return data.data;
});

export const postIcf = createAsyncThunk(
  'postIcf',
  async (data: SavedCodesPostData) => {
    const empId = localStorage.getItem('empId');
    await axiosInstance.post(`/rs/mkf`, {
      ...data,
      empId,
    });
  }
);

export const searchIcf = createAsyncThunk('searchIcf', async (str: string) => {
  const data = await axiosInstance.get(`/rs/term/icf/search`, {
    params: {
      str,
    },
  });

  return data.data;
});
