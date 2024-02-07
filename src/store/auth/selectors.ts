import { RootState } from '@/store/store';

export const authSelector = (state: RootState) => state.auth.isAuth;

export const authLoadingSelector = (state: RootState): boolean =>
  state.auth.loading;

export const userProfilesSelector = (state: RootState) =>
  state.auth.userProfiles;
