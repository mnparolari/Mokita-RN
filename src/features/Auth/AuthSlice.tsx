import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    name: null,
    surname: null,
    localId: null,
    imageCamera: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            return {
                ...state,
                user: action.payload.data.email,
                token: action.payload.data.idToken,
                localId: action.payload.data.localId,
                name: action.payload.originalArgs.name,
                surname: action.payload.originalArgs.surname
            }
        },
        clearUser: () => {
            return {
                user: null,
                token: null,
                name: null,
                surname: null,
                localId: null,
                imageCamera: null
            }
        },
        setCameraImage: (state, action) => {
            state.imageCamera = action.payload;
        }
    }
})

export const { setUser, clearUser, setCameraImage } = authSlice.actions

export default authSlice.reducer