import { IProduct } from "../interface/product"
import instance from "./config"
import Cookies from "js-cookie";

const options = () => {
    return {
        headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
        },
    };
};

export const getAll = () => {
    return instance.get("/products")
}
export const getOne = (id: String) => {
    return instance.get(`/products/${id}`)
}
export const getdelete = (id: Number | String) => {
    return instance.delete(`/products/` + id, options())
}
export const getAddProduct = (product: IProduct) => {
    return instance.post("/products", product, options())
}
export const getUpdateProduct = (product: IProduct) => {
    return instance.put(`/products/${product._id}`, product, options())
}
