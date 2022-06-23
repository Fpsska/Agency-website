import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import gallerySlice from './slices/gallerySlice';
import headerSlice from './slices/headerSlice';

// /. imports

export const store = configureStore({
  reducer: {
    gallerySlice: gallerySlice,
    headerSlice: headerSlice
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
