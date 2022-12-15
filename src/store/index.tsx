import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
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
export const asyncTestAction = createAsyncThunk(
  'index/value',
  async (_, { getState }) => {
    console.log(getState());
    return new Promise((resolve: any, reject: any) => {
      // resolve(123);
      reject(6666);
    });
  },
);

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
    incrementByAmount: (state, action: PayloadAction<any>) => {
      console.log(indexStore.getInitialState() === initialState);
      state.value += action.payload;
      state.obj.value += action.payload;
      // 内调用
      // indexStore.caseReducers.decremented(state, { type: action.type, payload: 666 });
    },
  },
  extraReducers(builder) {
    builder.addCase(asyncTestAction.fulfilled, (state, action: PayloadAction<any>) => {
      state.value = action.payload;
      console.log(state);
      console.log(action);
    })
      .addCase(asyncTestAction.pending, (state, action) => {
        console.log('pedding');
      })
      .addCase(asyncTestAction.rejected, (state, action) => {
        console.log('reject');
      });
  },
});
export const { incremented, decremented, incrementByAmount } = indexStore.actions;
export default indexStore.reducer;
