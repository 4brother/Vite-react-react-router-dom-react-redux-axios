import { createSlice, PayloadAction } from '@reduxjs/toolkit';

declare type IndexStoreState = {
  value: number,
  obj: {
    value: number,
  }
};

const initialState: IndexStoreState = {
  value: 0,
  obj: {
    value: 1,
  },
};

const indexStore = createSlice({
  name: 'index',
  initialState,
  reducers: {
    incremented: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      console.log(action);
      state.value += action.payload;
      state.obj.value += action.payload;
    },
  },
});
export const { incremented, decremented, incrementByAmount } = indexStore.actions;
export default indexStore.reducer;
