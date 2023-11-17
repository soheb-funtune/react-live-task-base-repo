import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  postsData: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setposts: (state, action) => {
      state.postsData = action.payload;
    },
    addPost: (state, action) => {
      let randomId = Math.floor(Math.random(1) * 1999);

      state.postsData = [
        { id: randomId, ...action.payload },
        ...state.postsData,
      ];
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setposts, addPost } =
  counterSlice.actions;

export default counterSlice.reducer;
