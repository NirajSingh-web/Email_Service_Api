import { createSlice } from "@reduxjs/toolkit";
import { FetchEmailServicedata } from "../AsyncThunk/AsyncThunk";
const FetchUserEmailServiceslice = createSlice({
  name: "EmailServices",
  initialState: {
    EmailServices: null, // Object to store EmailServices data
    authorization: {
      token: null,
      isAuthenticated: false,
      // other authorization-related data
    },
    loading: false,
    error: null,
  },
  reducers:{
  },
  extraReducers: (builder) => {
    builder.addCase(FetchEmailServicedata.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(FetchEmailServicedata.fulfilled, (state, action) => {
        state.loading = false;
        state.EmailServices = action.payload; // Assuming user data is stored with a unique identifier (e.g., user ID)
        state.authorization.isAuthenticated = true; // Assuming successful fetch means the user is authenticated
      }),
      builder.addCase(FetchEmailServicedata.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.authorization.isAuthenticated = false; // Authentication failed
      });
  },
});

export default FetchUserEmailServiceslice.reducer;
