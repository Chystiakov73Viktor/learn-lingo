import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAddTeachers, fetchDeleteTeachers, fetchGetTeachers } from '../../services/dbTeachers';

export const getTeachers = createAsyncThunk(
  'teachers/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchGetTeachers();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTeacher = createAsyncThunk(
  'teachers/addTeacher',
  async (teacher, { rejectWithValue }) => {
    try {
      const data = await fetchAddTeachers(teacher);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTeacher = createAsyncThunk(
  'teachers/deleteTeacher',
  async (id, { rejectWithValue }) => {
    try {
      await fetchDeleteTeachers(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
