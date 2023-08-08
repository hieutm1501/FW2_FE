import { Select, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../../../redux/store';
import { useEffect } from 'react';
import { fetchAllBill, fetchUpdateStatus } from '../../../redux/billSlice';
import { useForm } from 'react-hook-form';




const UpdateBill = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const bills = useSelector((state: RootState) => state.bill.entities)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllBill());
    }, [])
    console.log("biu", bills);
    const dataBill = bills?.bill

    const { register, handleSubmit, reset } = useForm({})
    useEffect(() => {
        const currentProduct = dataBill?.find((item: any) => item._id === id)
        reset(currentProduct)
        console.log("cuuu", currentProduct);

    }, [])

    const handleChange = async (event: any) => {
        try {
            await dispatch(fetchUpdateStatus(event));
            await dispatch(fetchAllBill());
            message.success("Cập Nhật Thành Công Trạng Thái Mua Hàng !!")
            navigate("/admin/bill")
        } catch (error) {

        }
    };
    return (
        <div>
            <div className="relative z-10" role="dialog" aria-modal="true">
                <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"></div>
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                        <div className="flex w-6/12 transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                            <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                                <button type="button" className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8">
                                    <Link to={`/admin/bill`}>
                                        <span className="sr-only">Close</span>
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </Link>
                                </button>

                                <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">

                                    <div className="sm:col-span-8 lg:col-span-7">
                                        <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">Cập Nhật Trạng Thái Đơn Hàng</h2>



                                        <section aria-labelledby="options-heading" className="mt-10">
                                            <h3 id="options-heading" className="sr-only">Product options</h3>

                                            <form onSubmit={handleSubmit(handleChange)}>
                                                {/* <!-- Địa chỉ --> */}
                                                <div>
                                                    <h4 className="text-[16px] font-[700] text-gray-900">Địa Chỉ Nhận Hàng:</h4>
                                                    <input type="text" {...register("name")} />
                                                </div>
                                                <div>
                                                    <h4 className="text-[16px] font-[700] text-gray-900">SĐT Khách Hàng:</h4>
                                                    <input type="text" {...register("phone")} />
                                                </div>
                                                <div>
                                                    <h4 className="text-[16px] font-[700] text-gray-900">Tiền Cần Thanh Toán:</h4>
                                                    <input type="text" {...register("totalprice")} />
                                                </div>

                                                {/* <!-- Status --> */}
                                                <div className="mt-10">
                                                    <div className="flex items-center justify-between">
                                                        <h4 className="text-[16px] font-[700] text-gray-900">Status:</h4>
                                                        <select {...register("status")} >
                                                            <option value="Pending">Pending</option>
                                                            <option value="Cancelled">Cancelled</option>
                                                            <option value="Confirmed">Confirmed</option>
                                                            <option value="Delivering">Delivering</option>
                                                            <option value="Delivered">Delivered</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <button type="submit" className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">EDIT STATUS</button>
                                            </form>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateBill