import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  refreshThunk,
  signinThunk,
  signoutThunk,
  signupThunk,
  updateProfileThunk,
} from './operations';

const initialState = {
  userEmail: null,
  userName: null,
  avatarURL: null,
  userToken: null,
  isSignin: false,
  error: '',
  isLoading: false,
  isRefreshing: false,
};
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupThunk.fulfilled, (state, { payload }) => {
        state.userEmail = payload.email;
        state.userName = payload.name;
        state.avatarURL = payload.avatarURL;
        state.userToken = payload.token;
        state.isSignin = true;
      })
      .addCase(signinThunk.fulfilled, (state, { payload }) => {
        state.userEmail = payload.email;
        state.userName = payload.name;
        state.avatarURL = payload.avatarURL;
        state.userToken = payload.token;
        state.isSignin = true;
      })
      .addCase(signoutThunk.fulfilled, (state) => {
        state.userEmail = null;
        state.userName = null;
        state.avatarURL = null;
        state.userToken = null;
        state.isSignin = false;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.userEmail = payload.user.email;
        state.userName = payload.user.name;
        state.avatarURL = payload.user.avatar;
        state.userToken = payload.token;
        state.isSignin = true;
        state.isRefreshing = false;
      })
      .addCase(refreshThunk.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(updateProfileThunk.fulfilled, (state, { payload }) => {
        state.userName = payload.displayName || state.userName;
        state.avatarURL = payload.photoURL || state.avatarURL;
      })
      .addMatcher(isAnyOf(...getRequests('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getRequests('pending')), handlePending)
      .addMatcher(isAnyOf(...getRequests('rejected')), handleRejected);
  },
});
const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = '';
};
const handlePending = (state) => {
  state.isLoading = true;
  state.error = '';
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const arrayRequests = [
  signupThunk,
  signinThunk,
  signoutThunk,
  refreshThunk,
  updateProfileThunk,
];

const getRequests = (type) => arrayRequests.map((action) => action[type]);

export const userReducer = userSlice.reducer;