import { ApiURL } from '../../api/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IUser } from '../../types/user'

const config = {
    headers: {
        'Content-Type': 'application/json',
    },
}

export const signInUser = createAsyncThunk<IUser, { name: string }>(
    'user',
    async ({ name }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(
                `${ApiURL}users`,
                { name },
                config
            )
            return data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)