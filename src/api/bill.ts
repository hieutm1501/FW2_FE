import instance from "./config"
import Cookies from "js-cookie";

const options = () => {
    return {
        headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
        },
    };
};

// HIỂN THỊ TẤT CẢ BILL CHO ADMIN
export const getAllBill = () => {
    return instance.get(`/bill`)
}
//HIỂN THỊ BILL USER
export const getOneBill = () => {
    return instance.get(`/bill/user`, options())
}
// THANH TOÁN
export const getCheckOutBill = (bill: any) => {
    return instance.post(`/bill/user/add`, bill, options())
}
// UPDATE STATUS
export const UpdateStatus = (bill: any) => {
    return instance.put(`/bill/update/status/${bill._id}`, bill)
}
// HUỶ ĐƠN HÀNG
export const CancelBill = (id: any) => {
    return instance.delete(`/bill/cancel/status/${id}`, options())
}
//HIỂN THỊ BILL Confirmed
export const ConfirmedBill = () => {
    return instance.get(`/bill/user/confirmed`, options())
}
//HIỂN THỊ BILL Delivering
export const DeliveringBill = () => {
    return instance.get(`/bill/user/delivering`, options())
}
//HIỂN THỊ BILL Delivered
export const DeliveredBill = () => {
    return instance.get(`/bill/user/delivered`, options())
}