import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  favorites: [],
  error: null,
  loading: false,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, action) {
      const existingCard = state.favorites.find(
        favorite => favorite.id === action.payload.id
      );

      if (!existingCard) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter(
        favorite => favorite.id !== action.payload
      );
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    setLoading(state) {
      state.loading = true;
    },
  },
});

const carConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favorites'],
};

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const favoritesReducer = persistReducer(
  carConfig,
  favoritesSlice.reducer
);
