import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAddProduct, getAll, getOne, getUpdateProduct, getdelete } from '../api/product'
import { getOneCategory } from '../api/category'




// First, create the thunk
export const fetchProductsAll = createAsyncThunk(
    'products/fetchAllStatus',
    async () => {
        const response = await getAll()
        return response.data
    }
)
// DETAIL PRODUCT
export const fetchDetailProduct = createAsyncThunk(
    'products/detailProduct',
    async (productId: string) => {
        const response = await getOne(productId);
        return response.data;
    }
)

// LỌC THEO CATEGORY
export const fetchProductsAllcate = createAsyncThunk(
    'products/fetchAllofcateStatus',
    async (idcate: any) => {
        const response = await getOneCategory(idcate)
        return response.data
    }
)
// DELETE PRODUCT
export const fetchdeleteProduct = createAsyncThunk(
    'products/deleteProduct',
    async (productId: string) => {
        const response = await getdelete(productId);
        return response.data;
    }
)
// CREAT PRODUCT
export const fetchcreatProduct = createAsyncThunk(
    'products/creatProduct',
    async (product: any) => {
        const response = await getAddProduct(product);
        return response.data;
    }
)

// UPDATE PRODUCT
export const fetchupdateProduct = createAsyncThunk(
    'products/updateProduct',
    async (product: any) => {
        const response = await getUpdateProduct(product);
        return response.data;
    }
)


interface productsState {
    entities: any
    loading: boolean
}

const initialState = {
    entities: [],
    loading: false,
} as productsState

// Then, handle actions in your reducers:
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductsAll.fulfilled, (state, action: any) => {
            state.entities = (action.payload);
        });
        builder.addCase(fetchdeleteProduct.fulfilled, (state, action) => {
            state.loading = false;
        });
        builder.addCase(fetchcreatProduct.fulfilled, (state, action) => {
            state.loading = false;
        });
        builder.addCase(fetchupdateProduct.fulfilled, (state, action) => {
            state.loading = false;
        });
        builder.addCase(fetchProductsAllcate.fulfilled, (state, action) => {
            state.entities = action.payload.category
        });
        builder.addCase(fetchDetailProduct.fulfilled, (state, action) => {
            state.loading = false;
        });
    },
})

// Later, dispatch the thunk as needed in the app
export default productsSlice.reducer