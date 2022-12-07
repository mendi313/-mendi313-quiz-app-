import { createSlice } from '@reduxjs/toolkit';

export const questionReducer = createSlice({
  name: 'questions',
  initialState: {
    queue: [],
    answers: [],
    trace: 0,
  },
  reducers: {
    startExamAction: (state, action) => {
      let { questions, answers } = action.payload;
      return {
        ...state,
        queue: questions,
        answers,
      };
    },
    increaseTrace: (state) => {
      if (state.trace + 1 < state.queue.length) state.trace = state.trace + 1;
    },
    decreaseTrace: (state) => {
      if (state.trace - 1 > -1) state.trace = state.trace - 1;
    },
    resetExsam: (state) => {
      return {
        ...state,
        queue: [],
        answers: [],
        trace: 0,
      };
    },
  },
});

export const { decreaseTrace, increaseTrace, startExamAction, resetExsam } =
  questionReducer.actions;
export default questionReducer.reducer;
