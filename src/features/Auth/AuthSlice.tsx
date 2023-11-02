import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    localId: null,
    imageCamera: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { email, idToken, localId } = action.payload;
            return {
                ...state,
                user: email,
                token: idToken,
                localId: localId,
            }
        },
        clearUser: () => {
            return {
                user: null,
                token: null,
                localId: null,
                imageCamera: null,
            }
        },
        setCameraImage: (state, action) => {
            state.imageCamera = action.payload;
        }
    }
})

export const { setUser, clearUser, setCameraImage } = authSlice.actions

export default authSlice.reducer