import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import gallerySlice from './slices/gallerySlice';

// /. imports

export const store = configureStore({
  reducer: {
    gallerySlice: gallerySlice
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
