import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from 'redux-persist';
import { filterReducer } from './filter/reducer';
import { favoritesReducer } from './favorites/reducer';
import { userReducer } from './users/reducer';
import { teacherReducer } from './teachers/reducer';

const userConfig = {
  key: 'user',
  storage,
  whitelist: ['userToken', 'avatarURL', 'userName'],
};

export const store = configureStore({
  reducer: {
    users: persistReducer(userConfig, userReducer),
    teachers: teacherReducer,
    filter: filterReducer,
    favorites: favoritesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);