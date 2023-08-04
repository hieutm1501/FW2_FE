import { ICategory } from "../interface/product"
import instance from "./config"
const user = JSON.parse(localStorage.getItem("user")!)

export const getAllCategory = () => {
    return instance.get("/categories")
}
export const getOneCategory = (id: string) => {
    return instance.get(`/categories/${id}`)
}
export const getAddCategory = (categories: ICategory) => {
    return instance.post("/categories", categories, {
        headers: {
            Authorization: `Bearer ${user.accessToken}`
        }
    })
}
export const getdeleteCategory = (id: number | string) => {
    return instance.delete(`/categories/` + id, {
        headers: {
            Authorization: `Bearer ${user.accessToken}`
        }
    })
}
export const getUpdateCategories = (categories: ICategory) => {
    return instance.put(`/categories/${categories._id}`, categories, {
        headers: {
            Authorization: `Bearer ${user.accessToken}`
        }
    })
}