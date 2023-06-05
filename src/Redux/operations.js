import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://646241e77a9eead6faca9048.mockapi.io";
export const getUsers = createAsyncThunk("users/get", async (_, thunkAPI) => {
  try {
    const { data } = await axios.get("/users");
    return data.sort((b, a) => a.tweets - b.tweets);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const putUser = createAsyncThunk(
  "users/put",
  async ({ id, followers }, thunkAPI) => {
    try {
      const { data } = await axios.put(`/users/${id}`, {
        followers,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
