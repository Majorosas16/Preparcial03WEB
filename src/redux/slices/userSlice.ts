import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserType } from "../../Types/UserType";

interface SliceType {
  user: UserType[];
}

const initialState: SliceType = {
  user: [],
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<UserType>) => {
      state.user = [...state.user, action.payload];
    },
    toggleUserRole: (state, action: PayloadAction<{ id: number }>) => {
      const user = state.user.find((u) => u.id === action.payload.id);
      if (user) {
        user.role = user.role === "admin" ? "user" : "admin";
      }
    },
  },
});

export const { saveUser, toggleUserRole } = UserSlice.actions;
export default UserSlice.reducer;
