import { createAsyncThunk } from "@reduxjs/toolkit";
import { FormProps, FormPropsForEdit, UserTableSortProps } from "../..//@types/user";
import {
  useChangeUser,
  useChangeUserState, useCreateUser,
  useDeleteUser,
  useGetAllUsers, useGetAllUsersCount,
  useGetUser, useUploadPhoto
} from "../../service/userService";

export const getUsersThunk = createAsyncThunk("users", async ( sort: UserTableSortProps, thunkAPI) => {
  const response = await useGetAllUsers(sort, thunkAPI);
  return response
})
export const getAllUsersCountThunk = createAsyncThunk("count", async ( thunkAPI) => {
  const response = await useGetAllUsersCount(thunkAPI);
  return response
})

export const getUserThunk = createAsyncThunk("user", async ( userId: number, thunkAPI) => {
  const response = await useGetUser(userId, thunkAPI);
  return response
})
export const deleteUserThunk = createAsyncThunk("delete", async ( userId: number, thunkAPI) => {
  const response = await useDeleteUser(userId, thunkAPI);
  return response
})
export const changeUserStateThunk = createAsyncThunk("changeDisabled", async ( data: { userId: number, state: boolean }, thunkAPI) => {
  const response = await useChangeUserState(data.userId, data.state, thunkAPI);
  return response
})

export const changeUserThunk = createAsyncThunk("changeUser", async ( data: FormPropsForEdit, thunkAPI) => {
  const response = await useChangeUser(data, thunkAPI);
  return response
})

export const createUserThunk = createAsyncThunk("create", async ( data: FormProps, thunkAPI) => {
  const response = await useCreateUser(data, thunkAPI);
  return response
})
export const uploadPhotoThunk = createAsyncThunk("photo", async ( data: File, thunkAPI) => {
  const response = await useUploadPhoto(data, thunkAPI);
  return response
})