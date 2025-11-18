import { configureStore } from "@reduxjs/toolkit";
import RickMortySlice from "./slices/RickMortySlice";

export const store = configureStore({
  reducer: {
    rickMorty: RickMortySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
