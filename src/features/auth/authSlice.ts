import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'model/user';

export interface LoginPayLoad {
  username: string,
  password: string
}

export interface AuthState {
  isLoggedIn: Boolean,
  logging?: Boolean,
  currentUser?: User
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayLoad>) {
      state.isLoggedIn = false,
      state.logging = true,
      state.currentUser = undefined
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.isLoggedIn = true,
      state.logging = false,
      state.currentUser = action.payload
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.isLoggedIn = false,
      state.logging = false,
      state.currentUser = undefined
    },
    
    logout(state) {
      state.isLoggedIn = false,
      state.logging = false,
      state.currentUser = undefined
    }
  },
});

//Actions
export const authActions = authSlice.actions

//Selectors
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn
export const selectIsLogging = (state: any) => state.auth.logging

//Reducer
const authReducer = authSlice.reducer
export default authReducer
