import { configureStore } from "@reduxjs/toolkit";
import DigiSlice from "./slices/DigiSlice";

export const store = configureStore({
  reducer: {
    rickMorty: DigiSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
