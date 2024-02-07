import { normolizedUserProfile } from '@/utils/types/user';
import { createSlice } from '@reduxjs/toolkit';
import { checkAuthThunk, loginThunk } from './thunks';

interface Auth {
  isAuth: boolean;
  loading: boolean;
  userProfiles: normolizedUserProfile[];
}

const initialState: Auth = {
  isAuth: false,
  loading: true,
  userProfiles: [],
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isAuth = false;
      localStorage.removeItem('basicToken');
      localStorage.removeItem('userProfileId');
      localStorage.removeItem('profileId');
      localStorage.removeItem('lastName');
      localStorage.removeItem('firstName');
      localStorage.removeItem('secondName');
      localStorage.removeItem('post');
      localStorage.removeItem('deptName');
      localStorage.removeItem('deptId');
      localStorage.removeItem('empId');
      state.userProfiles = [];
    },
    setActiveProfile(state, { payload }) {
      localStorage.setItem('deptId', state.userProfiles[payload].deptID);
      localStorage.setItem('post', state.userProfiles[payload].post);
      localStorage.setItem('deptName', state.userProfiles[payload].deptName);
      localStorage.setItem('empId', state.userProfiles[payload].employeeId);
      localStorage.setItem(
        'userProfileId',
        state.userProfiles[payload].userProfileId
      );
      localStorage.setItem('profileId', state.userProfiles[payload].profileId);
      localStorage.setItem('token', state.userProfiles[payload].token);

      state.isAuth = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = false;
      })
      .addCase(
        loginThunk.fulfilled,
        (
          state,
          {
            payload: {
              lastName,
              firstName,
              secondName,
              basicToken,
              userProfiles,
            },
          }
        ) => {
          localStorage.setItem('lastName', lastName);
          localStorage.setItem('firstName', firstName);
          localStorage.setItem('secondName', secondName);
          if (userProfiles.length > 1) {
            state.userProfiles = userProfiles;
          } else {
            const profile = userProfiles[0];
            localStorage.setItem('deptId', profile.deptID);
            localStorage.setItem('post', profile.post);
            localStorage.setItem('deptName', profile.deptName);
            localStorage.setItem('empId', profile.employeeId);
            localStorage.setItem('userProfileId', profile.userProfileId);
            localStorage.setItem('profileId', profile.profileId);
            localStorage.setItem('token', profile.token);
          }
          localStorage.setItem('basicToken', basicToken as string);
          state.loading = false;
        }
      )
      .addCase(loginThunk.rejected, (state) => {
        state.isAuth = false;
        localStorage.removeItem('basicToken');
      })
      .addCase(checkAuthThunk.pending, () => {})
      .addCase(
        checkAuthThunk.fulfilled,
        (
          state,
          {
            payload: {
              lastName,
              firstName,
              secondName,
              basicToken,
              userProfileByProfileId,
              filteredUserProfiles,
            },
          }
        ) => {
          localStorage.setItem('lastName', lastName);
          localStorage.setItem('firstName', firstName);
          localStorage.setItem('secondName', secondName);
          localStorage.setItem('deptId', userProfileByProfileId.deptID);
          localStorage.setItem('post', userProfileByProfileId.post);
          localStorage.setItem('deptName', userProfileByProfileId.deptName);
          localStorage.setItem(
            'userProfileId',
            userProfileByProfileId.userProfileId
          );
          localStorage.setItem('profileId', userProfileByProfileId.profileId);
          localStorage.setItem('token', userProfileByProfileId.token);
          state.userProfiles = filteredUserProfiles;
          localStorage.setItem('basicToken', basicToken as string);
          state.loading = false;
        }
      )
      .addCase(checkAuthThunk.rejected, (state) => {
        state.isAuth = false;
        localStorage.removeItem('basicToken');
        localStorage.removeItem('userProfileId');
        localStorage.removeItem('profileId');
        localStorage.removeItem('lastName');
        localStorage.removeItem('firstName');
        localStorage.removeItem('secondName');
      });
  },
});

export const { logout, setActiveProfile } = auth.actions;

export default auth.reducer;
