import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {createAsyncThunk } from "@reduxjs/toolkit";

export const addOrderApi = createAsyncThunk(
    "order/addOrderApi",
    async (payload) => {
        console.log('payload',payload);
      await axios
        .post(`http://localhost:5000/order`, {
          customer_id : payload.listId,
          total: payload.total,
          status: "Pending",
          cart : payload.cart
        })
        .then((res) => {
          // console.log(".addOrderApi ~ res", res);
          return res;
        })
        .catch((e) => {
          console.log("e", e);
        });
    }
  );

  export const getOrderApi = createAsyncThunk(
    "order/addOrderApi",
    async () => {
      const res = await axios
        .get(`http://localhost:5000/order`)
        .then((res) => {
          // console.log(".addOrderApi ~ res", res);
          return res;
        })
        .catch((e) => {
          console.log("e", e);
        });
      return res.data;
    }
  );

  export const getOrderUserApi = createAsyncThunk(
    "order/getOrderUserApi",
    async (id) => {
      const res = await axios
        .get(`http://localhost:5000/order/customer/${id}`)
        .then((res) => {
          // console.log(".addOrderApi ~ res", res);
          return res;
        })
        .catch((e) => {
          console.log("e", e);
        });
      return res.data;
    }
  );
  export const getOrderFindOneApi = createAsyncThunk(
    "order/getOrderFindOneApi",
    async (id) => {
      const res = await axios
        .get(`http://localhost:5000/order/${id}`)
        .then((res) => {
          // console.log(".addOrderApi ~ res", res);
          return res;
        })
        .catch((e) => {
          console.log("e", e);
        });
      return res.data;
    }
  );
  export const deleteOrderApi = createAsyncThunk(
    "order/deleteOrderApi",
    async (id) => {
      const res = await axios
        .delete(`http://localhost:5000/order/delete/${id}`)
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
  export const updateOrderApi = createAsyncThunk(
    "order/updateOrderApi",
    async (payload) => {
      const res = await axios
        .put(`http://localhost:5000/order/${payload.id}`, {
          status: payload.status,
        })
        .then((res) => {
          // console.log(".listProductApi ~ res", res);
          return res;
        })
        .catch((e) => {
          // console.log("e", e);
        });
      return res.data;
    }
  );
const orderList = createSlice({
    name: 'orderList',
    initialState: {
      listOrderApi:[],
      listOrderUserApi:[],
      listOrderFindOneApi:[],
      searchValue:null
    },
    reducers: {
      // searchItem: (state, action) => {
      //   state.searchValue = action.payload;
      //   const value = action.payload;
      //   state.listOrderApi = [...state.listOrderApi]
      //     .map((item, index) => {
      //       let condition = false;
      //       if (item.fullName.toUpperCase().includes(value)) {
      //         condition = true;
      //       }
      //       if (item.fullName.toLowerCase().includes(value)) {
      //         condition = true;
      //       }
      //       if (item.type.includes(value)) {
      //         condition = true;
      //       }
      //       if (item.color.includes(value)) {
      //         condition = true;
      //       }
      //       return { ...item, condition };
      //     })
      //     .filter((vl) => vl.condition);
      // }
    },
    
    extraReducers:{
      
        [addOrderApi.pending]: (state,action) => {
          state.loading = true;
        },
        [addOrderApi.rejected]: (state,action) =>{},
        [addOrderApi.fulfilled]: (state, action) =>{
        },
        [getOrderApi.pending]: (state,action) => {
          state.loading = true;
        },
        [getOrderApi.rejected]: (state,action) =>{},
        [getOrderApi.fulfilled]: (state, action) =>{
          state.listOrderApi = action.payload || [];
        },
        [getOrderUserApi.pending]: (state,action) => {
          state.loading = true;
        },
        [getOrderUserApi.rejected]: (state,action) =>{},
        [getOrderUserApi.fulfilled]: (state, action) =>{
          state.listOrderUserApi = action.payload || [];
        },
        [getOrderFindOneApi.pending]: (state,action) => {
          state.loading = true;
        },
        [getOrderFindOneApi.rejected]: (state,action) =>{},
        [getOrderFindOneApi.fulfilled]: (state, action) =>{
          state.listOrderFindOneApi = action.payload || [];
        },
    }
});



const {reducer, actions} = orderList;
export const {searchItem} = actions;
export default reducer;