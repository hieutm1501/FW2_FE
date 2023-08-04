import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { ICategory } from '../../interface/product';
import { message } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "../../redux/store";
import { fetchCategoryAll, fetchupdateCategory } from "../../redux/categorySlice";



const CategoriesUpdate = () => {
    const dispatch = useDispatch()
    const category = useSelector((state: RootState) => state.category.entities)
    const categorys = category?.categories
    useEffect(() => {
        dispatch(fetchCategoryAll())
    }, [])
    const navigate = useNavigate();
    const { id } = useParams();
    const { register, handleSubmit, reset } = useForm({});
    useEffect(() => {
        const currentCategories = categorys?.find((item: any) => item._id == id)
        reset(currentCategories)
    }, [])
    const onHandleSubmit = (data: any) => {
        if (data.name == "") {
            message.warning("Nhập đầy đủ !!")
            return
        }
        dispatch(fetchupdateCategory(data))
        dispatch(fetchCategoryAll())
        navigate('/admin/categories')
        message.success("Category update to success !!!")
    }

    return (
        <div>
            <h1 className='text-2xl'>Edit Danh Mục</h1>
            <div className='grid grid-cols-2 gap-3'>
                <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                    <div>
                        <label htmlFor="first_name" className="text-[16px] block mb-2 text-sm font-medium text-gray-900 dark:text-white">Catagories name:</label>
                        <input type="text" {...register('name')} className="w-[300px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Category.." required />
                    </div>
                    <button className='bg-blue-500 w-[150px] py-[5px] rounded-lg mt-[10px] ' type='submit'>Edit Categories</button>
                </form>
                <img src="https://res.cloudinary.com/dwp7umncy/image/upload/v1680968215/ass_ts_nodejs/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6669742f632f3138342f3138342f312a495247486d69477361313673746564517649615a66772e676966_ffdd44.gif" alt="" />
            </div>
        </div>
    )
}

export default CategoriesUpdate