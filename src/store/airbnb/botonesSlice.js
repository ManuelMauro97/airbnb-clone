import { createSlice } from '@reduxjs/toolkit';

export const botonesSlice = createSlice({
  name: 'botones',
  initialState: {
    selectedButtonId: null,
  },
  reducers: {
    onSelectedButton: (state, action) => {
      state.selectedButtonId = action.payload;
    },
  },
});

export const { onSelectedButton } = botonesSlice.actions;