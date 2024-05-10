import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const FetchEmailServicedata = createAsyncThunk(
  "/EmailService/get/data",
  async (userid, thunkapi) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("invalid token");
      }
      const response = await axios.get(
        `http://localhost:3000/emailService/get/data${userid}`,
        {
          headers: { Authorization: token },
        }
      );
      return response.data;
    } catch (e) {
      return thunkapi.rejectWithValue(e.message);
    }
  }
);
export { FetchEmailServicedata };
