import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RickMorty } from "../../Types/RickMortyType";

//Hay que crearle un tipado al estado inicial
interface SliceType {
  apiRickMorty: RickMorty[];
  RickMortyAdd: RickMorty[];
}

const initialState: SliceType = {
  apiRickMorty: [],
  RickMortyAdd: [],
};

export const RickMortySlice = createSlice({
  name: "digi",
  initialState,
  reducers: {
    saveApi: (state, action) => {
      state.apiRickMorty = action.payload;
    },
    saveRickMorty: (state, action: PayloadAction<RickMorty>) => {
      state.RickMortyAdd = [...state.RickMortyAdd, action.payload];
    },
  },
});

export const { saveApi, saveRickMorty } = RickMortySlice.actions;
export default RickMortySlice.reducer;
