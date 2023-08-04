import { InputNumber, Button, message, Popconfirm } from 'antd';
import { useEffect } from "react"
import { DeleteOutlined } from '@ant-design/icons';
import Cookies from "js-cookie";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import { fetchCartProduct } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';




const confirm = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    message.success('Click on Yes');
};

const cancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    message.error('Click on No');
};

const CartPage = () => {
    const navigate = useNavigate();
    // NGĂN CHẠN NGƯỜI DÙNG KHI CHƯA ĐĂNG NHẬP
    const accessToken = Cookies.get("accessToken");
    useEffect(() => {
        if (!accessToken) {
            navigate("/signin");
            message.warning("Bạn phải đăng nhập để truy cập giỏ hàng");
        }
    }, [accessToken, navigate]);

    const onChange = (value: number) => {
        console.log(value);
    };

    const cartUser = useSelector((state: RootState) => state.cart.entities)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCartProduct())
    }, [])
    const dataCartUser = cartUser?.cart?.products

    console.log("cart", cartUser);

    return (
        <div className='bg-gray-100  pt-[50px]'>
            <div className=" mx-[50px]">
                <div className="flex shadow-md py-[50px]">
                    <div className="w-3/4 bg-white px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                        </div>
                        <div className="flex mt-10 mb-5">
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product cart</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                        </div>
                        {/* SẢN PHẨM */}
                        {dataCartUser?.map((item) => (


                            <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                <div className="flex w-2/5">
                                    <div className="w-20">
                                        <img className="h-24" src={`${item?.productId?.image}`} alt="" />
                                    </div>
                                    <div className="flex flex-col justify-between ml-4 flex-grow">
                                        <span className="font-bold text-sm">{item?.productId?.name}</span>

                                    </div>
                                </div>
                                <span className="text-center w-1/5 font-semibold text-sm">${item?.productId?.price}</span>
                                <div className="flex justify-center w-1/5">
                                    <div>
                                        <InputNumber min={1} max={5} defaultValue={item?.quantity} onChange={onChange} />
                                    </div>
                                    <div className='mx-[10px]'>
                                        <button >
                                            <Popconfirm
                                                title="Delete the task"
                                                description="Are you sure to delete this task?"
                                                onConfirm={confirm}
                                                onCancel={cancel}
                                                okText="Yes"
                                                cancelText="No"
                                            >
                                                <Button danger>
                                                    <DeleteOutlined className='text-[20px] text-red-500 ' />
                                                </Button>
                                            </Popconfirm>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}


                        <a href="/" className="flex font-semibold text-indigo-600 text-sm mt-10">

                            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                            Continue Shopping
                        </a>
                    </div>

                    <div id="summary" className="w-1/4 px-8 py-10">
                        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">Total</span>
                            <span className="font-semibold text-sm">590$</span>
                        </div>
                        <div>
                            <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                            <select className="block p-2 text-gray-600 w-full text-sm">
                                <option>$100</option>
                            </select>
                        </div>
                        <div className="py-10">
                            <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                            <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
                        </div>
                        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Total cost</span>
                                <span>$600</span>
                            </div>
                            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default CartPage