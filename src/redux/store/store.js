import customerReducer from '../reducers/customerSlice'
import { configureStore } from "@reduxjs/toolkit";
import listProductReducer  from '../reducers/productSlice';
import listCommentReducer  from '../reducers/commentSlice';
import listOrderReducer  from '../reducers/orderSlice';

const rootReducer = {
    listCustomer: customerReducer,
    listProduct : listProductReducer,
    listComment : listCommentReducer,
    listOrder : listOrderReducer
}

const store = configureStore({
    reducer: rootReducer
});

export default store;