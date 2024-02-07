import { Base64 } from 'js-base64';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  checkLoginProfiles,
  checkProfiles,
  checkUserProfileByUserId,
} from '@/utils/functions';
import { User, normolizedUserProfile } from '@/utils/types/user';
import { axiosInstance } from '@/utils/Axios/instance';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async ({ username, password }: { username: string; password: string }) => {
    const basicToken = Base64.encode(`${username}:${password}`);
    const { data }: { data: User } = await axiosInstance.post(
      'auth',
      {},
      {
        headers: {
          Authorization: `Basic ${basicToken}`,
        },
      }
    );

    const {
      lastName,
      firstName,
      secondName,
    }: { lastName: string; firstName: string; secondName: string } = data;

    const userProfiles: normolizedUserProfile[] = checkLoginProfiles(data);

    return {
      lastName,
      firstName,
      secondName,
      basicToken,
      userProfiles,
    };
  }
);

export const checkAuthThunk = createAsyncThunk('auth/checkAuth', async () => {
  const basicToken = localStorage.getItem('basicToken');

  const { data }: { data: User } = await axiosInstance.post(
    'auth',
    {},
    {
      headers: {
        Authorization: `Basic ${basicToken}`,
      },
    }
  );

  const {
    lastName,
    firstName,
    secondName,
  }: { lastName: string; firstName: string; secondName: string } = data;

  const userProfiles: normolizedUserProfile[] = checkProfiles(data);

  const { userProfileByProfileId, filteredUserProfiles } =
    checkUserProfileByUserId(userProfiles);

  return {
    lastName,
    firstName,
    secondName,
    basicToken,
    userProfileByProfileId,
    filteredUserProfiles,
  };
});
