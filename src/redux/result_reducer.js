import { createSlice } from '@reduxjs/toolkit';

export const resultReducer = createSlice({
  name: 'result',
  initialState: {
    userId: null,
    result: [],
    resultTable: [],
  },
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    pushResultAction: (state, action) => {
      state.result.push(action.payload);
    },
    pushResultTableAction: (state, action) => {
      state.resultTable.push(action.payload);
    },
    updateResultAction: (state, action) => {
      const { trace, checked } = action.payload;
      state.result.fill(checked, trace, trace + 1);
    },
    resetResultAction: (state) => {
      state.result = [];
      state.userId = '';
    },
  },
});

export const {
  setUserId,
  pushResultAction,
  resetResultAction,
  updateResultAction,
  pushResultTableAction,
} = resultReducer.actions;

export default resultReducer.reducer;
