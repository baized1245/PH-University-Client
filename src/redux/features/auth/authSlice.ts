import { createSlice } from '@reduxjs/toolkit'

type TAuthState = {
    user: null | object
    token: null | string
}

const initialState: TAuthState = {
    user: null,
    token: null
}

const authSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

        setUser: (state, action) => {
            const { user, token } = action.payload
            state.user = user
            state.token = token
        },

        logout: (state) => {
            state.user = null
            state.token = null
        }
    }
})

export const { logout, setUser } = authSlice.actions

export default authSlice.reducer
