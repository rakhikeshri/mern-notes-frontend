import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: null,
  loginData: {
    email: '',
    password: ''
  },
  
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setLoginData: (state, action) => {
      state.loginData = action.payload;
    },    
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload
    }
  },
});

export const { setLoginData, setLoggedIn } = usersSlice.actions;
export default usersSlice.reducer;
