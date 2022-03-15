import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {createAsyncThunk } from "@reduxjs/toolkit";

export const addCommentApi = createAsyncThunk(
    "comments/addCommentApi",
    async (payload) => {
      console.log("🚀 ~ file: commentSlice.js ~ line 8 ~ payload", payload.rate)
      await axios
        .post(`http://localhost:5000/comments`, {
          product_id: payload.product_id,
          customer_id: payload.customer_id,
          content: payload.contentVl,
          rating: payload.rate
        })
        .then((res) => {
          console.log(".addCustomerApi ~ res", res);
          return res;
        })
        .catch((e) => {
          console.log("e", e);
        });
    }
  );
  export const getListCommentApi = createAsyncThunk(
    "comments/getCommentApi",
    async () => {
      const res = await axios
        .get(`http://localhost:5000/comments`)
        .then((res) => {
          // console.log(".listProductApi ~ res", res);
          return res;
        })
        .catch((e) => {
          console.log("e", e);
        });
      return res.data;
    }
  );
const userRegister = createSlice({
    name: 'listCustomer',
    initialState: {
        listCommentInit: [],
        addComment: null
    },
    reducers: {
        addComment: (state,action) => {
            state.addComment = action.payload
        },
    },
    
    extraReducers:{
      
        [addCommentApi.pending]: (state,action) => {
          state.loading = true;
        },
        [addCommentApi.rejected]: (state,action) =>{},
        [addCommentApi.fulfilled]: (state, action) =>{
            state.success = true;
        },
        [getListCommentApi.pending]: (state,action) => {
          state.loading = true;
        },
        [getListCommentApi.rejected]: (state,action) =>{},
        [getListCommentApi.fulfilled]: (state, action) =>{
          state.listCommentInit = action.payload || []
        },
        
    }
});



const {reducer, actions} = userRegister;
export const {addComment} = actions;
export default reducer;