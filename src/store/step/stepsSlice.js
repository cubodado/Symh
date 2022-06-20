import { createSlice } from '@reduxjs/toolkit';

const stepsSlice = createSlice({
  name: 'steps',
  initialState: [
    { inputText: '' },
    { heartColor: '', check: false },
    { heartSender: '' },
  ],
  reducers: {
    changeInputText: (state, action) => {
      state[0].inputText = action.payload.inputText;
    },
    changeHeartColor: (state, action) => {
      state[1].heartColor = action.payload.heartColor;
      state[1].check = action.payload.check;
    },
    changeHeartSender: (state, action) => {
      state[2].heartSender = action.payload.heartSender;
    },
    resetStates: (state) => {
      state[0].inputText = '';
      state[1].heartColor = '';
      state[1].check = false;
      state[2].heartSender = '';
    },
  },
});

export const {
  changeInputText,
  changeHeartColor,
  changeHeartSender,
  resetStates,
} = stepsSlice.actions;
export default stepsSlice.reducer;
