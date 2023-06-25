import { UserProps } from "../../@types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  changeUserStateThunk,
  changeUserThunk, createUserThunk,
  deleteUserThunk, getAllUsersCountThunk,
  getUsersThunk,
  getUserThunk, uploadPhotoThunk
} from "../../store/thunk/user";
interface UserState {
  users: UserProps[];
  user: UserProps;
  file: string;
  count: number;
  isLoading: boolean;
  error: null | string;
}
const initialState: UserState = {
  users: [],
  user: {} as UserProps,
  file: "",
  count: 0,
  isLoading: false,
  error: null
}
 export const userSlice = createSlice({
   name: "users",
   initialState,
   reducers: {},
   extraReducers: {
     [getAllUsersCountThunk.pending.type]: (state) => {
       state.isLoading = true;
     },

     [getAllUsersCountThunk.fulfilled.type]: (state, action) => {
       state.count = action.payload.length;
       state.isLoading = false;
     },

     [getAllUsersCountThunk.rejected.type]: (state, action: PayloadAction<string>) => {
       state.isLoading = false;
       state.error = action.payload;
     },

     [getUsersThunk.pending.type]: (state) => {
       state.isLoading = true;
     },

     [getUsersThunk.fulfilled.type]: (state, action) => {
       state.users = action.payload;
       state.isLoading = false;
     },

     [getUsersThunk.rejected.type]: (state, action: PayloadAction<string>) => {
       state.isLoading = false;
       state.error = action.payload;
     },

     [getUserThunk.pending.type]: (state) => {
       state.isLoading = true;
     },

     [getUserThunk.fulfilled.type]: (state, action) => {
       state.user = action.payload;
       state.isLoading = false;
     },

     [getUserThunk.rejected.type]: (state, action: PayloadAction<string>) => {
       state.isLoading = false;
       state.error = action.payload;
     },

     [deleteUserThunk.pending.type]: (state) => {
       state.isLoading = true;
     },

     [deleteUserThunk.fulfilled.type]: (state, action) => {
       state.users = state.users.filter((user) => user.id !== action.meta.arg);
       state.isLoading = false;
     },

     [deleteUserThunk.rejected.type]: (state, action: PayloadAction<string>) => {
       state.isLoading = false;
       state.error = action.payload;
     },

     [changeUserStateThunk.pending.type]: (state) => {
       state.isLoading = true;
     },

     [changeUserStateThunk.fulfilled.type]: (state, action) => {
       state.users = state.users.map((user) => {
         if (user.id === action.meta.arg.userId) {
           user.disabled = action.meta.arg.state
         }
         return user;
       });
       state.isLoading = false;
     },

     [changeUserStateThunk.rejected.type]: (state, action: PayloadAction<string>) => {
       state.isLoading = false;
       state.error = action.payload;
     },

     [changeUserThunk.pending.type]: (state) => {
       state.isLoading = true;
     },

     [changeUserThunk.fulfilled.type]: (state, action) => {
       state.users = state.users.map((user) => {
         if (user.id === action.meta.arg.id) {
           user.name = action.meta.arg.name
           user.email = action.meta.arg.email
           user.location = action.meta.arg.location
         }
         return user;
       });
       state.isLoading = false;
     },

     [changeUserThunk.rejected.type]: (state, action: PayloadAction<string>) => {
       state.isLoading = false;
       state.error = action.payload;
     },

     [createUserThunk.pending.type]: (state) => {
       state.isLoading = true;
     },

     [createUserThunk.fulfilled.type]: (state, action) => {
       state.users.push(action.payload)
       state.isLoading = false;
     },

     [createUserThunk.rejected.type]: (state, action: PayloadAction<string>) => {
       state.isLoading = false;
       state.error = action.payload;
     },

     [uploadPhotoThunk.pending.type]: (state) => {
       state.isLoading = true;
     },

     [uploadPhotoThunk.fulfilled.type]: (state, action) => {
       state.file = action.payload.url
       state.isLoading = false;
     },

     [uploadPhotoThunk.rejected.type]: (state, action: PayloadAction<string>) => {
       state.isLoading = false;
       state.error = action.payload;
     },
   }
 })

export default userSlice.reducer;