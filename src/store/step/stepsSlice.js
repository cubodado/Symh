import { createSlice } from '@reduxjs/toolkit';

const stepsSlice = createSlice({
  name: 'steps',
  initialState: [
    { inputText: '' },
    { heartShape: '', check: false },
    { heartAnimation: '', check: false },
  ],
  reducers: {
    changeInputText: (state, action) => {
      state[0].inputText = action.payload.inputText;
    },
    changeHeartShape: (state, action) => {
      state[1].heartShape = action.payload.heartShape;
      state[1].check = action.payload.check;
    },
    changeHeartAnimation: (state, action) => {
      state[2].heartAnimation = action.payload.heartAnimation;
      state[2].check = action.payload.check;
    },
  },
});

export const { changeInputText, changeHeartShape, changeHeartAnimation } =
  stepsSlice.actions;
export default stepsSlice.reducer;
