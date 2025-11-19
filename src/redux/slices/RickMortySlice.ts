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
    // Establece el userType a un valor concreto (admin o user)
    setUserType: (state, action: PayloadAction<"admin" | "user">) => {
      state.userType = action.payload;
    },
    //Cambia automáticamente de admin a user o viceversa según el estado actual
    toggleUserType: (state) => {
      state.userType = state.userType === "admin" ? "user" : "admin";
    },
    editCharacter: (state, action: PayloadAction<RickMorty>) => {
      state.apiRickMorty = state.apiRickMorty.map((t) =>
        t.id === action.payload.id ? action.payload : t
      );
    },
    deleteCharacter: (state, action: PayloadAction<number | string>) => {
      state.apiRickMorty = state.apiRickMorty.filter(
        (rm) => rm.id !== action.payload
      );
    },
  },
});

export const {
  saveApi,
  saveRickMorty,
  setUserType,
  toggleUserType,
  editCharacter,
  deleteCharacter,
} = RickMortySlice.actions;
export default RickMortySlice.reducer;
