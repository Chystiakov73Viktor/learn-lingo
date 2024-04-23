import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    languagesFilter: '',
    priceFilter: '',
    levelFilter: '',
  },
  reducers: {
    setLanguagesFiltered(state, action) {
      state.languagesFilter = action.payload;
    },
    setPriceFiltered(state, action) {
      state.priceFilter = action.payload;
    },
    setLevelFiltered(state, action) {
      state.levelFilter = action.payload;
    },
  },
});

export const { setLanguagesFiltered, setPriceFiltered, setLevelFiltered } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;