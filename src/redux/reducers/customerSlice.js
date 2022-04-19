/** @format */

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addCustomerApi = createAsyncThunk(
  'customer/addCustomerApi',
  async (payload) => {
    await axios
      .post(`http://localhost:5000/customer/register`, {
        username: payload.username,
        mail: payload.email,
        password: payload.password,
        fullName: payload.fullName,
        phone: payload.phone,
        address: payload.address,
        gender: payload.gender,
        role: '2',
      })
      .then((res) => {
        return res;
      })
      .catch((e) => {
        console.log('e', e);
      });
  },
);
export const getListCustomerApi = createAsyncThunk(
  'customer/getCustomerApi',
  async () => {
    const res = await axios
      .get(`http://localhost:5000/customer`)
      .then((res) => {
        return res;
      })
      .catch((e) => {
        console.log('e', e);
      });
    return res.data;
  },
);

export const deleteListCustomerApi = createAsyncThunk(
  'customer/deleteCustomerApi',
  async (id) => {
    const res = await axios
      .delete(`http://localhost:5000/customer/${id}`)
      .then((res) => {
        return res;
      })
      .catch((e) => {
        console.log('e', e);
      });
    return res.data;
  },
);
export const updateCustomerApi = createAsyncThunk(
  'customer/updateCustomerApi',
  async (payload) => {
    const res = await axios
      .put(`http://localhost:5000/customer/${payload.id}`, {
        username: payload.username,
        mail: payload.mail,
        password: payload.password,
        fullName: payload.fullName,
        phone: payload.phone,
        address: payload.address,
        gender: payload.gender,
      })
      .then((res) => {
        console.log('.addCustomerApi ~ res', res);
        return res;
      })
      .catch((e) => {
        // console.log("e", e);
      });
    console.log(' line 71 ~ res.data', res.data);
    return res.data;
  },
);
const userRegister = createSlice({
  name: 'listCustomer',
  initialState: {
    listCustomerInit: [],
    listCustomerApi: [],
    customer: {},
    infoUser: {},
    loading: false,
    setSortUser: null,
    searchUser: null,
  },
  reducers: {
    addCustomer: (state, action) => {
      state.customer = action.payload;
    },
    setInfoCustomer: (state, action) => {
      state.infoUser = action.payload;
    },
    setSortUser: (state, action) => {
      state.setSortUser = action.payload;
      state.listCustomerApi = [...state.listCustomerInit].sort((a, b) => {
        if (action.payload === 'Name') {
          var aName = a.username.toUpperCase();
          var bName = b.username.toUpperCase();
          if (aName > bName) {
            return 1;
          }
          if (aName < bName) {
            return -1;
          }
        }
        if (action.payload) {
          return true;
        }
      });
    },
    searchUser: (state, action) => {
      state.searchUser = action.payload;
      const value = action.payload;
      state.listCustomerApi = [...state.listCustomerInit]
        .map((item) => {
          let condition = false;
          if (item.username.toUpperCase().includes(value)) {
            condition = true;
          }
          if (item.username.toLowerCase().includes(value)) {
            condition = true;
          }
          if (item.fullName.toUpperCase().includes(value)) {
            condition = true;
          }
          if (item.fullName.toLowerCase().includes(value)) {
            condition = true;
          }
          if (item.address.toUpperCase().includes(value)) {
            condition = true;
          }
          if (item.address.toLowerCase().includes(value)) {
            condition = true;
          }
          if (item.phone.includes(value)) {
            condition = true;
          }
          return { ...item, condition };
        })
        .filter((vl) => vl.condition);
    },
  },

  extraReducers: {
    [addCustomerApi.pending]: (state, action) => {
      state.loading = true;
    },
    [addCustomerApi.rejected]: (state, action) => {},
    [addCustomerApi.fulfilled]: (state, action) => {},
    [getListCustomerApi.pending]: (state, action) => {
      state.loading = true;
    },
    [getListCustomerApi.rejected]: (state, action) => {},
    [getListCustomerApi.fulfilled]: (state, action) => {
      state.listCustomerApi = action.payload || [];
      state.listCustomerInit = action.payload || [];
    },
    [deleteListCustomerApi.pending]: (state, action) => {
      state.loading = true;
    },
  },
});

const { reducer, actions } = userRegister;
export const { addUser } = actions;
export const {
  addCustomer,
  saveCurrentLocation,
  deleteUser,
  setSortUser,
  searchUser,
  setInfoCustomer,
} = actions;
export default reducer;
