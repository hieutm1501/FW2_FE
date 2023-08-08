import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { CancelBill, ConfirmedBill, DeliveredBill, DeliveringBill, UpdateStatus, getAllBill, getCheckOutBill, getOneBill } from '../api/bill'





// TẤT CẢ BILL CỦA KHÁCH HÀNG
export const fetchAllBill = createAsyncThunk(
    'bill/fetchAllStatus',
    async () => {
        const response = await getAllBill()
        return response.data
    }
)

// THANH TOÁN 
export const fetchCkeckOutBill = createAsyncThunk(
    'bill/fetchCheckoutStatus',
    async (bill) => {
        const response = await getCheckOutBill(bill)
        return response.data
    }
)
// UPDATE STATUS ADMIN
export const fetchUpdateStatus = createAsyncThunk(
    'bill/fetchUpdateStatus',
    async (bill) => {
        const response = await UpdateStatus(bill)
        return response.data
    }
)
// Huỷ Đơn Hàng
export const fetchBillCancel = createAsyncThunk(
    'bill/fetchBillCancel',
    async (id) => {
        const response = await CancelBill(id)
        return response.data
    }
)

// TẤT CẢ BILL THEO ID USER
export const fetchUserBill = createAsyncThunk(
    'bill/fetchUserBill',
    async () => {
        const response = await getOneBill()
        return response.data
    }
)

// TẤT CẢ BILL THEO Confirmed
export const fetchBillConfirmed = createAsyncThunk(
    'bill/fetchBillConfirmed',
    async () => {
        const response = await ConfirmedBill()
        return response.data
    }
)
// TẤT CẢ BILL THEO Delivering
export const fetchBillDelivering = createAsyncThunk(
    'bill/fetchBillDelivering',
    async () => {
        const response = await DeliveringBill()
        return response.data
    }
)
// TẤT CẢ BILL THEO Delivered
export const fetchBillDelivered = createAsyncThunk(
    'bill/fetchBillDelivered',
    async () => {
        const response = await DeliveredBill()
        return response.data
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
const CartSlice = createSlice({
    name: 'cartUsser',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllBill.fulfilled, (state, action: any) => {
            state.entities = (action.payload);
        });
        builder.addCase(fetchCkeckOutBill.fulfilled, (state, action: any) => {
            state.loading = false;
        });
        builder.addCase(fetchUpdateStatus.fulfilled, (state, action: any) => {
            state.loading = false;
        });
        builder.addCase(fetchBillCancel.fulfilled, (state, action: any) => {
            state.loading = false;
        });
        builder.addCase(fetchUserBill.fulfilled, (state, action: any) => {
            state.entities = (action.payload);
        });
        builder.addCase(fetchBillConfirmed.fulfilled, (state, action: any) => {
            state.entities = (action.payload);
        });
        builder.addCase(fetchBillDelivering.fulfilled, (state, action: any) => {
            state.entities = (action.payload);
        });
        builder.addCase(fetchBillDelivered.fulfilled, (state, action: any) => {
            state.entities = (action.payload);
        });
    },
})

// Later, dispatch the thunk as needed in the app
export default CartSlice.reducer