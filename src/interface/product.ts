export interface IProduct {
    _id: string,
    name: string,
    image: string,
    price: number,
    sell_price: number,
    mota: string,
    chitiet: string,
    dacdiem: string,
    categoryId: ICategory,
    createdAt: string,

}
export interface ICategory {
    _id: string,
    name: string

}
export interface DataType {
    _id: number | string,
    name: string,
    price: number,
    image: string,

}
export interface IUsers {
    _id: string,
    name: string,
    email: string,
    password: string,
    role: string
}