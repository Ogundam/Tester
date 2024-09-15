import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        login: false,
        data:{},
            
    },  
    reducers:{

        login: (state, action) => {
            state.login = true
            state.data = action.payload
        },

        logout: (state) => {
            state.login = false
            state.data = {}
        }
    }
    
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer