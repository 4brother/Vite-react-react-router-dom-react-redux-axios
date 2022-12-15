import { configureStore } from '@reduxjs/toolkit';
import indexStore from './index';

const mainStore = configureStore({
  reducer: {
    indexStore,
  },
});
export default mainStore;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof mainStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof mainStore.dispatch;
