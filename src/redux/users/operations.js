import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  getIdToken,
} from 'firebase/auth';
import { app } from '../../services/firebase';

const auth = getAuth(app);

export const signupThunk = createAsyncThunk(
  'users/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      const user = userCredential.user;

      await updateProfile(auth.currentUser, {
        displayName: credentials.name,
        photoURL: credentials.avatarURL,
      });

      const token = await getIdToken(user);

      return {
        email: user.email,
        name: user.displayName,
        token,
      };
    } catch (error) {
      return rejectWithValue.rejectWithValue({
        message: error.message,
        type: 'authError',
      });
    }
  }
);

export const signinThunk = createAsyncThunk(
  'users/signin',
  async (credentials, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      const user = userCredential.user;
 
      const token = await getIdToken(user);

      return {
        email: user.email,
        name: user.displayName,
        avatarURL: user.photoURL,
        token,
      };
    } catch (error) {
      return rejectWithValue.rejectWithValue({
        message: error.message,
        type: 'authError',
      });
    }
  }
);

export const signoutThunk = createAsyncThunk(
  'users/signout',
  async (_, thunkAPI) => {
    try {
      await signOut(auth);
      return null;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.message,
        type: 'authError',
      });
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'users/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const currentToken = state.users.userToken;
    const avatar = state.users.avatarURL;

    if (currentToken === null) {
      return thunkAPI.rejectWithValue('');
    }

    try {
      const user = auth.currentUser;

      if (!user) {
        return thunkAPI.rejectWithValue({
          message: 'No user found',
          type: 'authError',
        });
      }

      const token = await user.getIdToken(currentToken);

      if (!token) {
        return thunkAPI.rejectWithValue({
          message: 'No token found',
          type: 'authError',
        });
      }

      const userData = {
        id: user.uid,
        email: user.email,
        name: user.displayName,
        avatar: avatar,
      };
      return { token, user: userData };
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.message,
        type: 'authError',
      });
    }
  }
);

export const updateProfileThunk = createAsyncThunk(
  'users/update',
  async ({ displayName, photoURL }, thunkAPI) => {
    try {
      const user = auth.currentUser;

      if (!user) {
        return thunkAPI.rejectWithValue({
          message: 'No user found',
          type: 'authError',
        });
      }

      if (!displayName && !photoURL) {
        return thunkAPI.rejectWithValue({
          message: 'No credentials provided',
          type: 'requestError',
        });
      }

      await updateProfile(user, { displayName, photoURL });

      return { displayName: user.displayName, photoURL: user.photoURL };
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.message,
        type: 'requestError',
      });
    }
  }
);
