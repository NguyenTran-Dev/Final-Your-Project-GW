/** @format */

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { switchCase } from "@babel/types";

export const getListProductApi = createAsyncThunk(
  "product/getProductApi",
  async () => {
    const res = await axios
      .get(`http://localhost:5000/products/search?KeySearch`)
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

export const postListProductApi = createAsyncThunk(
  "product/postProductApi",
  async (payload) => {
    await axios
      .post(`http://localhost:5000/products`, {
        name: payload.name,
        type: payload.type,
        price: payload.price,
        stock: payload.stock,
        color: payload.color,
        description: payload.description,
      })
      .then((res) => {
        // console.log(".listProductApi ~ res", res);
        return res;
      })
      .catch((e) => {
        console.log("e", e);
      });
  }
);
export const updateProductApi = createAsyncThunk(
  "product/updateProductApi",
  async (payload) => {
    const res = await axios
      .put(`http://localhost:5000/products/update/${payload.id}`, {
        name: payload.name,
        type: payload.type,
        price: payload.price,
        stock: payload.stock,
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
export const deleteListProductApi = createAsyncThunk(
  "product/deleteApiData",
  async (id) => {
    const res = await axios
      .delete(`http://localhost:5000/products/delete/${id}`)
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
const listProduct = createSlice({
  name: "listProduct",
  initialState: {
    listProductApi: [],
    listProductInit: [],
    cart: [],
    order: {},
    wishlist: [],
    relateProduct: [],
    sortType: "All",
    sortPrice: null,
    filterType: null,
    searchValue: null,
    currentPage: 1,
    loading: false,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },

    setSort: (state, action) => {
      state.sortType = action.payload;
      state.currentPage = 1;
      state.listProductApi = [...state.listProductInit]
        .filter((item) => {
          if (state.filterType === "all") {
            return (state.listProductApi = [...state.listProductInit]);
          } else {
            return !state.filterType || state.filterType === item.type;
          }
        })
        .sort((a, b) => {
          if (action.payload === "NameA") {
            var nameA = a.name.toUpperCase(); // ignore upper and lowercase
            var nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
          }
          if (action.payload === "NameZ") {
            var nameA = a.name.toUpperCase(); // ignore upper and lowercase
            var nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return 1;
            }
            if (nameA > nameB) {
              return -1;
            }
          }
          if (action.payload === "All") {
            return (state.listProductApi = state.listProductInit);
          }
          if (action.payload === "RatingZ") {
            return b.rating - a.rating;
          }
          if (action.payload === "RatingA") {
            return a.rating - b.rating;
          }
          if (action.payload === "PriceA") {
            return a.price - b.price;
          }
          if (action.payload === "PriceZ") {
            return b.price - a.price;
          }
          if (action.payload === "Stock") {
            return a.stock - b.stock;
          }
          if (action.payload === "Price") {
            return a.price - b.price;
          } else {
            return false;
          }
        });
    },
    setSortItem: (state, action) => {
      state.sortPrice = action.payload;
      state.currentPage = 1;
      const value = action.payload;
      console.log(value[0], "slider");
      console.log(value[1], "slider1");
      state.listProductApi = [...state.listProductInit].filter(
        (item, index) => {
          if (value[0] === 0 && value[1] === 10) {
            return item.price < 10;
          }
          if (value[0] === 0 && value[1] === 20) {
            return item.price < 20;
          }
          if (value[0] === 0 && value[1] === 30) {
            return item.price < 30;
          }
          if (value[0] === 0 && value[1] === 40) {
            return item.price < 40;
          }
          if (value[0] === 0 && value[1] === 50) {
            return item.price < 50;
          }
          if (value[0] === 0 && value[1] === 60) {
            return item.price < 60;
          }
          if (value[0] === 0 && value[1] === 70) {
            return item.price < 70;
          }
          if (value[0] === 0 && value[1] === 80) {
            return item.price < 80;
          }
          if (value[0] === 0 && value[1] === 90) {
            return item.price < 90;
          }
          if (value[0] === 0 && value[1] === 100) {
            return item.price > 0 && item.price < 150;
          }
          // split 10
          if (value[0] === 10 && value[1] === 20) {
            return item.price > 10 && item.price < 20;
          }
          if (value[0] === 10 && value[1] === 30) {
            return item.price > 10 && item.price < 30;
          }
          if (value[0] === 10 && value[1] === 40) {
            return item.price > 10 && item.price < 40;
          }
          if (value[0] === 10 && value[1] === 50) {
            return item.price > 10 && item.price < 50;
          }
          if (value[0] === 10 && value[1] === 60) {
            return item.price > 10 && item.price < 60;
          }
          if (value[0] === 10 && value[1] === 70) {
            return item.price > 10 && item.price < 70;
          }
          if (value[0] === 10 && value[1] === 80) {
            return item.price > 10 && item.price < 80;
          }
          if (value[0] === 10 && value[1] === 90) {
            return item.price > 10 && item.price < 90;
          }
          if (value[0] === 10 && value[1] === 100) {
            return item.price > 10 && item.price < 150;
          }
          // split 20
          if (value[0] === 20 && value[1] === 30) {
            return item.price > 20 && item.price < 30;
          }
          if (value[0] === 20 && value[1] === 40) {
            return item.price > 20 && item.price < 40;
          }
          if (value[0] === 20 && value[1] === 50) {
            return item.price > 20 && item.price < 50;
          }
          if (value[0] === 20 && value[1] === 60) {
            return item.price > 20 && item.price < 60;
          }
          if (value[0] === 20 && value[1] === 70) {
            return item.price > 20 && item.price < 70;
          }
          if (value[0] === 20 && value[1] === 80) {
            return item.price > 20 && item.price < 80;
          }
          if (value[0] === 20 && value[1] === 90) {
            return item.price > 20 && item.price < 90;
          }
          if (value[0] === 20 && value[1] === 100) {
            return item.price > 20 && item.price < 150;
          }
          // split 30
          if (value[0] === 30 && value[1] === 40) {
            return item.price > 30 && item.price < 40;
          }
          if (value[0] === 30 && value[1] === 50) {
            return item.price > 30 && item.price < 50;
          }
          if (value[0] === 30 && value[1] === 60) {
            return item.price > 30 && item.price < 60;
          }
          if (value[0] === 30 && value[1] === 70) {
            return item.price > 30 && item.price < 70;
          }
          if (value[0] === 30 && value[1] === 80) {
            return item.price > 30 && item.price < 80;
          }
          if (value[0] === 30 && value[1] === 90) {
            return item.price > 30 && item.price < 90;
          }
          if (value[0] === 30 && value[1] === 100) {
            return item.price > 30 && item.price < 150;
          }
          // split 40
          if (value[0] === 40 && value[1] === 50) {
            return item.price > 40 && item.price < 50;
          }
          if (value[0] === 40 && value[1] === 60) {
            return item.price > 40 && item.price < 60;
          }
          if (value[0] === 40 && value[1] === 70) {
            return item.price > 40 && item.price < 70;
          }
          if (value[0] === 40 && value[1] === 80) {
            return item.price > 40 && item.price < 80;
          }
          if (value[0] === 40 && value[1] === 90) {
            return item.price > 40 && item.price < 90;
          }
          if (value[0] === 40 && value[1] === 100) {
            return item.price > 40 && item.price < 150;
          }
          // split 50
          if (value[0] === 50 && value[1] === 50) {
            return item.price > 50 && item.price < 50;
          }
          if (value[0] === 50 && value[1] === 60) {
            return item.price > 50 && item.price < 60;
          }
          if (value[0] === 50 && value[1] === 70) {
            return item.price > 50 && item.price < 70;
          }
          if (value[0] === 50 && value[1] === 80) {
            return item.price > 50 && item.price < 80;
          }
          if (value[0] === 50 && value[1] === 90) {
            return item.price > 50 && item.price < 90;
          }
          if (value[0] === 50 && value[1] === 100) {
            return item.price > 50 && item.price < 150;
          }
          // split 60

          if (value[0] === 60 && value[1] === 70) {
            return item.price > 60 && item.price < 70;
          }
          if (value[0] === 60 && value[1] === 80) {
            return item.price > 60 && item.price < 80;
          }
          if (value[0] === 60 && value[1] === 90) {
            return item.price > 60 && item.price < 90;
          }
          if (value[0] === 60 && value[1] === 100) {
            return item.price > 60 && item.price < 150;
          }
          // split 70
          if (value[0] === 70 && value[1] === 80) {
            return item.price > 70 && item.price < 80;
          }
          if (value[0] === 70 && value[1] === 90) {
            return item.price > 70 && item.price < 90;
          }
          if (value[0] === 70 && value[1] === 100) {
            return item.price > 70 && item.price < 150;
          }
          // split 80

          if (value[0] === 80 && value[1] === 90) {
            return item.price > 80 && item.price < 90;
          }
          if (value[0] === 80 && value[1] === 100) {
            return item.price > 80 && item.price < 150;
          }
          // split 90

          if (value[0] === 90 && value[1] === 100) {
            return item.price > 90 && item.price < 150;
          }
        }
      );
    },
    filterType: (state, action) => {
      state.filterType = action.payload.key;
      state.currentPage = 1;
      state.listProductApi = [...state.listProductInit].filter(
        (item, index) => {
          const id = action.payload.key;
          switch (id) {
            case "1":
              state.filterType = "vegetables";
              return item.type === "vegetables";
            case "11":
              state.filterType = "fruits";
              return item.type === "fruits";
            case "8":
              state.filterType = "juice";
              return item.type === "juice";
            case "5":
              state.filterType = "meats";
              return item.type === "meats";
            case "2":
              state.filterType = "all";
              return true;
            default:
              return false;
          }
        }
      );
    },
    filterColor: (state, action) => {
      state.filterColor = action.payload.key;
      state.currentPage = 1;
      state.listProductApi = [...state.listProductInit]
        .filter((item) => {
          if (state.filterType === "all") {
            return (state.listProductApi = [...state.listProductInit]);
          } else {
            return !state.filterType || state.filterType === item.type;
          }
        })
        .filter((item) => {
          const id = action.payload.key;
          switch (id) {
            case "red":
              return item.color === "red";
            case "yellow":
              return item.color === "yellow";
            case "orange":
              return item.color === "orange";
            case "purple":
              return item.color === "purple";
            case "green":
              return item.color === "green";
            default:
              return false;
          }
        });
    },
    addToCart: (state, action) => {
      const id = action.payload.id;
      const isExist = state.cart.find((item) => item.id === id);

      if (isExist) {
        state.cart = state.cart.map((item) => {
          if (item.id === id) {
            return {
              ...action.payload,
              count: item.count + 1,
            };
          }
          return item;
        });
      } else {
        state.cart = [...state.cart, action.payload];
      }
    },
    addToWishlist: (state, action) => {
      const id = action.payload.id;
      const isExist = state.wishlist.find((item) => item.id === id);
      if (isExist) {
        return;
      } else {
        state.wishlist = [...state.wishlist, action.payload];
      }
    },
    deleteItemCart: (state, action) => {
      state.cart = state.cart.filter((item) => action.payload !== item.id);
    },
    clearItemCart: (state, action) => {
      state.cart = state.cart.filter((item) => action.payload === item.id);
    },
    deleteItemWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => action.payload !== item.id
      );
    },
    deleteItem: (state, action) => {
      state.listProductInit = state.listProductInit.filter(
        (item) => action.payload !== item.id
      );
    },
    editCartItem: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (action.payload.id === item.id) {
          return {
            ...action.payload,
            total: action.payload.price * action.payload.count,
          };
        }

        return item;
      });
    },
    setSortPrice: (state, action) => {
      state.listProductApi = [...state.listProductApi].sort((a, b) => {
        const id = action.payload.key;
        switch (id) {
          case "2":
            return a.price - b.price;
          case "6":
            return a.price - b.price;

          case "9":
            return a.price - b.price;
          case "12":
            return a.price - b.price;
          case "3":
            return a.rating - b.rating;
          case "7":
            return a.rating - b.rating;

          case "10":
            return a.rating - b.rating;
          case "13":
            return a.rating - b.rating;
          default:
            return true;
        }
      });
    },
    searchItem: (state, action) => {
      state.searchValue = action.payload;
      const value = action.payload;
      state.listProductApi = [...state.listProductInit]
        .map((item, index) => {
          let condition = false;
          let price = item.price.toString();
          let stock = item.stock.toString();
          if (item.name.toUpperCase().includes(value)) {
            condition = true;
          }
          if (item.name.toLowerCase().includes(value)) {
            condition = true;
          }
          if (item.type.includes(value)) {
            condition = true;
          }
          if (price.includes(value)) {
            condition = true;
          }
          if (stock.includes(value)) {
            condition = true;
          }
          if (item.color.includes(value)) {
            condition = true;
          }
          return { ...item, condition };
        })
        .filter((vl) => vl.condition);
      state.currentPage = 1;
    },
  },
  extraReducers: {
    [getListProductApi.pending]: (state, action) => {},
    [getListProductApi.rejected]: (state, action) => {},
    [getListProductApi.fulfilled]: (state, action) => {
      state.listProductApi = action.payload || [];
      state.listProductInit = action.payload || [];
    },
    [postListProductApi.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteListProductApi.pending]: (state, action) => {},
  },
});

const { reducer, actions } = listProduct;
export const {
  setSort,
  setSortItem,
  filterType,
  addToCart,
  setSortPrice,
  deleteItemCart,
  editCartItem,
  addToWishlist,
  deleteItemWishlist,
  addToDetail,
  deleteItem,
  filterColor,
  searchItem,
  setCurrentPage,
  clearItemCart,
} = actions;
export default reducer;
