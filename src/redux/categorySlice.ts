import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAddCategory, getAllCategory, getOneCategory, getUpdateCategories, getdeleteCategory } from '../api/category'



// First, create the thunk
export const fetchCategoryAll = createAsyncThunk(
    'category/fetchAllStatus',
    async () => {
        const response = await getAllCategory()
        return response.data
    }
)
export const fetchOneCategory = createAsyncThunk(
    'category/OneCategory',
    async (categoryId: string) => {
        const response = await getOneCategory(categoryId);
        return response.data;
    }
)

export const fetchdeleteCategory = createAsyncThunk(
    'category/deleteCategory',
    async (categoryId: string) => {
        const response = await getdeleteCategory(categoryId);
        return response.data;
    }
)
export const fetchcreatCategory = createAsyncThunk(
    'category/creatCategory',
    async (category: any) => {
        const response = await getAddCategory(category);
        return response.data;
    }
)

export const fetchupdateCategory = createAsyncThunk(
    'category/updateCategory',
    async (category: any) => {
        const response = await getUpdateCategories(category);
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
        builder.addCase(fetchCategoryAll.fulfilled, (state, action: any) => {
            // Concatenate the new products array to the existing entities array
            state.entities = (action.payload);

        });
        builder.addCase(fetchdeleteCategory.fulfilled, (state, action) => {
            state.loading = false;
        });
        builder.addCase(fetchcreatCategory.fulfilled, (state, action) => {
            state.loading = false;
        });
        builder.addCase(fetchupdateCategory.fulfilled, (state, action) => {
            state.loading = false;
        });
    },
})

// Later, dispatch the thunk as needed in the app
export default productsSlice.reducer