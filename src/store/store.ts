import { configureStore, combineReducers } from "@reduxjs/toolkit"
import userSlice from "../store/slice/user";

const rootReducer = combineReducers({ userSlice })
export const store = () => {
  return configureStore({ reducer: rootReducer })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];