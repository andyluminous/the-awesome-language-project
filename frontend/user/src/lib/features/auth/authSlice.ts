import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/lib/store'

interface IUserInfo {
  username: string;
  isLoggedIn: boolean;
}
// Define a type for the slice state
export interface AuthState {
  user: IUserInfo | null;
}

// Define the initial state using that type
const initialState: AuthState = {
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setUser: (state: AuthState, action: PayloadAction<IUserInfo>) => {
      state.user = action.payload
    },

    logOut: (state: AuthState) => {
      state.user = null
    }
  }
})

export const { setUser, logOut } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.auth.user;

export default authSlice.reducer
