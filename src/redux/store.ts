import { configureStore } from "@reduxjs/toolkit";
import RickMortySlice from "./slices/RickMortySlice";
import UserSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    rickMorty: RickMortySlice,
    user: UserSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
