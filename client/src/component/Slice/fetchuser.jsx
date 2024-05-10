import { createSlice } from "@reduxjs/toolkit";

const fetchuserdata = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    authorization: {
      token: null,
      isAuthenticated: false,
    },
  },
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload.userdetail;
      state.authorization.token = action.payload.token;
      state.authorization.isAuthenticated = true;
    },
    Removeuser(state, action) {},
    // Additional reducers for authorization-related actions
  },
});
export const { setCurrentUser } = fetchuserdata.actions;
export default fetchuserdata.reducer;
