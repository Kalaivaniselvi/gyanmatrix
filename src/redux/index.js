import { configureStore, createSlice } from '@reduxjs/toolkit';
const formSlice = createSlice({
  name: 'form',
  initialState: {
    formData: null,
  },
  reducers: {
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
    clearFormData: (state) => {
      state.formData = null;
    },
  },
});

export const { setFormData, clearFormData } = formSlice.actions;

export const store = configureStore({
  reducer: {
    form: formSlice.reducer,
  },
});