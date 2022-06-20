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
  },
});

export const { changeInputText, changeHeartColor, changeHeartSender } =
  stepsSlice.actions;
export default stepsSlice.reducer;
