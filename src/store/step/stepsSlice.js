import { createSlice } from '@reduxjs/toolkit';

const stepsSlice = createSlice({
  name: 'steps',
  initialState: [
    { inputText: '' },
    { heartColor: '', check: false },
    { heartAnimation: '', check: false },
  ],
  reducers: {
    changeInputText: (state, action) => {
      state[0].inputText = action.payload.inputText;
    },
    changeHeartColor: (state, action) => {
      state[1].heartColor = action.payload.heartColor;
      state[1].check = action.payload.check;
    },
    changeHeartAnimation: (state, action) => {
      state[2].heartAnimation = action.payload.heartAnimation;
      state[2].check = action.payload.check;
    },
  },
});

export const { changeInputText, changeHeartColor, changeHeartAnimation } =
  stepsSlice.actions;
export default stepsSlice.reducer;
