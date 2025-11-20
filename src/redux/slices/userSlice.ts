import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserType } from "../../Types/UserType";

interface SliceType {
  user: UserType | null;
}

const initialState: SliceType = {
  user: null,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload; // Reemplaza cualquier usuario existente
    },
    toggleUserRole: (state, action: PayloadAction<{ id: number }>) => {
      if (state.user && state.user.id === action.payload.id) {
        state.user.role = state.user.role === "admin" ? "user" : "admin";
      }
    },
  },
});

export const { saveUser, toggleUserRole } = UserSlice.actions;
export default UserSlice.reducer;
