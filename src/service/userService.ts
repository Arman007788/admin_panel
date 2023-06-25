import { Dispatch } from 'react';
import {
  FormProps,
  FormPropsForEdit,
  UserProps,
  UserTableSortProps
} from "../@types/user";
import { convertUrlParamsToString, instance } from "../hooks/useApi";

import { toast } from "react-toastify";

export const useGetAllUsers = async (
  sort: UserTableSortProps,
  thunkApi: unknown
): Promise<any> => {
  try {
    const params = convertUrlParamsToString(sort);
    const { data } = await instance.get<UserProps[]>(`/users${params}`);
    return data;
  } catch (error) {
    const thunkRejectError = thunkApi as { rejectWithValue: (message: string) => string, dispatch: Dispatch<unknown> }
    toast.error('Error')
    return thunkRejectError.rejectWithValue('error');
  }
};
export const useGetAllUsersCount = async (
  thunkApi: unknown
): Promise<any> => {
  try {
    const { data } = await instance.get<UserProps[]>(`/users`);
    return data;
  } catch (error) {
    const thunkRejectError = thunkApi as { rejectWithValue: (message: string) => string, dispatch: Dispatch<unknown> }
    toast.error('Error')
    return thunkRejectError.rejectWithValue('error');
  }
};

export const useGetUser = async (
  userId: number,
  thunkApi: unknown
): Promise<any> => {
  try {
    const { data } = await instance.get<UserProps[]>(`/users/${userId}`);
    return data;
  } catch (error) {
    const thunkRejectError = thunkApi as { rejectWithValue: (message: string) => string, dispatch: Dispatch<unknown> }
    toast.error('Error')
    return thunkRejectError.rejectWithValue('error');
  }
};

export const useDeleteUser = async (
  userId: number,
  thunkApi: unknown
): Promise<any> => {
  try {
    const { data } = await instance.delete<UserProps[]>(`/users/${userId}`);
    toast.success('Success!')
    return data;
  } catch (error) {
    const thunkRejectError = thunkApi as { rejectWithValue: (message: string) => string, dispatch: Dispatch<unknown> }
    toast.error('Error')
    return thunkRejectError.rejectWithValue('error');
  }
};

export const useChangeUserState = async (
  userId: number,
  state: boolean,
  thunkApi: unknown
): Promise<any> => {
  try {
    const { data } = await instance.patch<UserProps>(`/users/${userId}`,{ disabled: state });
    toast.success('Success!')
    return data;
  } catch (error) {
    const thunkRejectError = thunkApi as { rejectWithValue: (message: string) => string, dispatch: Dispatch<unknown> }
    toast.success('Error');
    return thunkRejectError.rejectWithValue('error');
  }
};

export const useChangeUser = async (
  changedData: FormPropsForEdit,
  thunkApi: unknown
): Promise<any> => {
  try {
    const { data } = await instance.put<FormPropsForEdit>(`/users/${changedData.id}`,{ name: changedData.name, email: changedData.email, location: changedData.location, photo: changedData.photo });
    toast.success('Success!')
    return data;
  } catch (error) {
    const thunkRejectError = thunkApi as { rejectWithValue: (message: string) => string, dispatch: Dispatch<unknown> }
    toast.error('Error')
    return thunkRejectError.rejectWithValue('error');
  }
};

export const useCreateUser = async (
  createdData: FormProps,
  thunkApi: unknown
): Promise<any> => {
  try {
    const { data } = await instance.post<FormProps>(`/users`,createdData);
    toast.success('Success!')
    return data;
  } catch (error) {
    const thunkRejectError = thunkApi as { rejectWithValue: (message: string) => string, dispatch: Dispatch<unknown> }
    toast.error('Error')
    return thunkRejectError.rejectWithValue('error');
  }
};
export const useUploadPhoto = async (
  photo: File,
  thunkApi: unknown
): Promise<any> => {
  try {
    const { data } = await instance.post<string>(`/images`,{file: photo}, { headers: { "Content-Type": "multipart/form-data" } });
    toast.success('Success!')
    return data;
  } catch (error) {
    const thunkRejectError = thunkApi as { rejectWithValue: (message: string) => string, dispatch: Dispatch<unknown> }
    toast.error("Error")
    return thunkRejectError.rejectWithValue('error');
  }
};