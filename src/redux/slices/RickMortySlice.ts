import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RickMorty } from "../../Types/RickMortyType";

//Hay que crearle un tipado al estado inicial
interface SliceType {
  apiRickMorty: RickMorty[];
  userType: "admin" | "user";
}

const initialState: SliceType = {
  apiRickMorty: [],
  userType: "user",
};

export const RickMortySlice = createSlice({
  name: "digi",
  initialState,
  reducers: {
    saveApi: (state, action) => {
      state.apiRickMorty = action.payload;
    },
    saveRickMorty: (state, action: PayloadAction<RickMorty>) => {
      state.apiRickMorty = [...state.apiRickMorty, action.payload];
    },
    setUserType: (state, action: PayloadAction<"admin" | "user">) => {
      state.userType = action.payload;
    },
    toggleUserType: (state) => {
      state.userType = state.userType === "admin" ? "user" : "admin";
    },
  },
});

export const { saveApi, saveRickMorty, setUserType, toggleUserType } =
  RickMortySlice.actions;
export default RickMortySlice.reducer;
