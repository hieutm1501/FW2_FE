import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productSlice';
import categoryReducer from './categorySlice';
import userReducer from './userSlice';
import cartReducer from './cartSlice';
import billReducer from './billSlice';


const store = configureStore({
    reducer: {
        product: productReducer,
        category: categoryReducer,
        user: userReducer,
        cart: cartReducer,
        bill: billReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;