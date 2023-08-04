import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { fetchcreatProduct } from '../../redux/productSlice';
import { useEffect } from 'react'
import { RootState } from "../../redux/store";
import { fetchCategoryAll } from "../../redux/categorySlice";


const AddPage = () => {
    const dispatch = useDispatch()
    const category = useSelector((state: RootState) => state.category.entities)
    useEffect(() => {
        dispatch(fetchCategoryAll())
    }, [])
    const categorys = category?.categories
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm({})
    const uploadFiles = async (files: FileList): Promise<string[]> => {
        const CLOUD_NAME = "dwp7umncy";
        const PRESET_NAME = "ass_ts_nodejs";
        const FOLDER_NAME = "shopinterior";
        const urls: string[] = [];
        const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

        const formData = new FormData();
        formData.append("upload_preset", PRESET_NAME);
        formData.append("folder", FOLDER_NAME);

        for (const file of Array.from(files)) {
            formData.append("file", file);
            try {
                message.loading({ content: 'Đang tải ảnh lên...', key: 'upload' });
                const response = await axios.post(api, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });
                urls.push(response.data.secure_url);
            } catch (error) {
                console.log(error);
                message.error({ content: 'Lỗi khi tải ảnh lên', key: 'upload' });
            }
        }
        return urls;
    };
    const onHandleSubmit = async (data: any) => {
        const images = await uploadFiles(data.image);
        const newData = { ...data, image: images };
        if (data.image == "" || data.name == "" || data.price == "") {
            message.warning("Nhập đầy đủ các trường !!!")
            return
        }
        dispatch(fetchcreatProduct(newData))
        message.success("Creat to product success !!!")
        navigate('/admin');

    };
    return (
        <div id='adminadd' >
            <h1 className='text-2xl'>Thêm Sản Phẩm Mới</h1>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                <div className='grid grid-cols-2 text-[14px] '>
                    <div className='w-[450px] ml-[50px] '>
                        <div>
                            <label className='text-[15px] font-[500]' htmlFor="">Image:</label>
                            <input type='file' multiple {...register('image')} className=" my-[8px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='The link image' />
                        </div>
                        <img src="https://res.cloudinary.com/dwp7umncy/image/upload/v1680885387/ass_ts_nodejs/product/giphy_tzyrmz.gif" alt="" />
                    </div>
                    <div className='w-full'>
                        <h2 className='text-xl'>Thông Tin Sản Phẩm</h2>
                        <div className='mt-[10px]'>
                            <label className='text-[15px] font-[500]' htmlFor="">Nhập tên sản phẩm:</label>
                            <textarea {...register('name')} className="my-[7px] block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nhập tên sản Phẩm..."></textarea>

                        </div>
                        <div className='grid grid-cols-2 gap-6  mt-[20px]'>
                            <div>
                                <label className='text-[15px] font-[500]' htmlFor="">Gia Gốc:</label>
                                <input {...register('price')} type="text" placeholder='Nhập giá sản phẩm vnđ' className="my-[7px] block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                        </div>
                        <div className='my-[20px]'>
                            <label className='text-[15px] font-[500]' htmlFor="">Danh Mục:</label>
                            <select {...register('categoryId')} className="my-[7px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {categorys?.map((item: any) =>
                                    <option value={item._id}>{item.name}</option>
                                )}
                            </select>
                        </div>

                        <div>
                            <button type="submit" className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2">
                                Add New
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default AddPage