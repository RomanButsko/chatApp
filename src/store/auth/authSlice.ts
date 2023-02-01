import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IUser } from '../../types/user'
import { signInUser } from './auth.actions'
import { IAuth } from './auth.interface'

const initialState = {
    isLoading: false,
    user: null,
    error: '',
} as IAuth

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signInUser.pending, (state, _) => {
                state.isLoading = true
            })
            .addCase(
                signInUser.fulfilled,
                (state, action: PayloadAction<IUser>) => {
                    state.isLoading = false
                    state.error = ''
                    state.user = action.payload
                }
            )
            .addCase(
                signInUser.rejected,
                (state, action: PayloadAction<any>) => {
                    state.isLoading = false
                    state.error = action.payload
                }
            )
    },
})

export const userSelector = (state: IAuth) => state
