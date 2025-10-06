import { createSlice } from "@reduxjs/toolkit";


const loadUserFromLocalStorage = () => {
    try {
        const serializedUser = localStorage.getItem('user');
        if (serializedUser == null)
            return { user: null }

        return { user: JSON.parse(serializedUser) }
    } catch (error) {
        return { user: null, error: error.message }
    }
}



const initialState = loadUserFromLocalStorage()
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
            localStorage.setItem('user', JSON.stringify(state.user) )
        },

        logout: (state, action) => {
            state.user = null;
            localStorage.removeItem('user');
        }
    }
})


export const {setUser, logout} = authSlice.actions;
export default authSlice.reducer;