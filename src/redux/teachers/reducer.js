import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getTeachers, addTeacher, deleteTeacher } from './operations';

const teacherSlice = createSlice({
  name: 'teachers',
  initialState: {
    teachers: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getTeachers.fulfilled, (state, action) => {
        console.log('action: ', action);
        state.teachers = action.payload;
      })
      .addCase(addTeacher.fulfilled, (state, action) => {
        state.teachers.push(action.payload);
      })
      .addCase(deleteTeacher.fulfilled, (state, action) => {
        state.teachers = state.teachers.filter(teacher => teacher.id !== action.payload.id);
      })
      .addMatcher(isAnyOf(...getRequests('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getRequests('pending')), handlePending)
      .addMatcher(isAnyOf(...getRequests('rejected')), handleRejected),
});

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const arrayRequests = [getTeachers, addTeacher, deleteTeacher];

const getRequests = type => arrayRequests.map(action => action[type]);

export const teacherReducer = teacherSlice.reducer;