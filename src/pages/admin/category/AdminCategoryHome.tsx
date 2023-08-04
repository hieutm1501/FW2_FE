import { Link } from 'react-router-dom'
import { Button, Popconfirm, message } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { RootState } from "../../../redux/store";
import { fetchCategoryAll, fetchdeleteCategory } from "../../../redux/categorySlice";

const text = 'Ông Bạn Muốn Xoá Không?';
const description = 'Xoá Là Mất Hết !';




const CategoriesHome = () => {
    const dispatch = useDispatch()
    const category = useSelector((state: RootState) => state.category.entities)
    const categorys = category?.categories
    useEffect(() => {
        dispatch(fetchCategoryAll())
    }, [])
    const cancelDelete = () => {
        message.error('Product deletion cancelled');
    };
    const removeCategories = async (id: string) => {
        try {
            await dispatch(fetchdeleteCategory(id))
            await dispatch(fetchCategoryAll())
        } catch (error) {
            message.error("Lỗi !!!")
        }

    }

    return (
        <div>

            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Categories Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Categories ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {categorys?.map((item: any) =>
                            <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.name}
                                </th>
                                <td className="px-6 py-4">
                                    {item._id}
                                </td>
                                <td className="px-6 py-4">
                                    <Link to={`/admin/categories/update/${item._id}`}><button className='bg-blue-500 w-[75px] py-[5px] rounded-lg text-[black]'>Edit</button></Link>
                                    <Popconfirm
                                        className='bg-red-500'
                                        title={text}
                                        description={description}
                                        onConfirm={() => removeCategories(item._id)}
                                        placement="top"
                                        onCancel={cancelDelete}
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        <Button >Delete</Button>
                                    </Popconfirm>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default CategoriesHome