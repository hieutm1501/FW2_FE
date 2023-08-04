import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productSlice'
import categoryReducer from './categorySlice'
import userReducer from './userSlice'
import cartReducer from './cartSlice'

const store = configureStore({
    reducer: {
        product: productReducer,
        category: categoryReducer,
        user: userReducer,
        cart: cartReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;