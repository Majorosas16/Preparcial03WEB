import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RickMorty } from "../../Types/RickMortyType";

//Hay que crearle un tipado al estado inicial
interface SliceType {
  apiRickMorty: RickMorty[];
  digiFav: RickMorty[];
}

const initialState: SliceType = {
  apiRickMorty: [],
  digiFav: [],
};

export const DigiSlice = createSlice({
  name: "digi",
  initialState,
  reducers: {
    saveApi: (state, action) => {
      state.apiRickMorty = action.payload;
    },
    saveDigi: (state, action: PayloadAction<RickMorty>) => {
      state.digiFav = [...state.digiFav, action.payload];
    },
  },
});

export const { saveApi, saveDigi } = DigiSlice.actions;
export default DigiSlice.reducer;
