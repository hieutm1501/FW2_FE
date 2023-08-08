import { InputNumber, Button, message, Popconfirm, notification } from 'antd';
import { useEffect, useState } from "react"
import { DeleteOutlined } from '@ant-design/icons';
import Cookies from "js-cookie";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import { fetchCartProduct, fetchdeleteCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { fetchCkeckOutBill } from '../redux/billSlice';




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
    // CALL API ALL CART USER
    const cartUser = useSelector((state: RootState) => state.cart.entities)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCartProduct())
    }, [])
    console.log("cart", cartUser?.cart?.products);
    const dataCartUser = cartUser?.cart?.products
    // TÍNH TỔNG TIỀN
    const [totalPrices, settotalprice] = useState(0);

    const calculateTotalPrice = (dataCartUser: any) => {
        let resal = 0;
        if (Array.isArray(dataCartUser)) {
            for (let sum of dataCartUser) {
                const sumall = sum?.quantity * sum?.productId?.price;
                resal += sumall;
            }
            console.log("Total priceeeee: ", resal);
            settotalprice(resal);
        } else {
            console.error("dataCartUser is not an array");
        }
    };

    useEffect(() => {
        calculateTotalPrice(dataCartUser);
    });


    // console.log("Total price: ", totalPrice);
    const deleteProductCart = async (productId: any) => {
        try {
            await dispatch(fetchdeleteCart(productId));
            await dispatch(fetchCartProduct());
            message.success('Product deleted successfully');
        } catch (error) {
            message.error(`Failed to delete product: ${error}`);
        }
    }

    // THANH TOÁN VỚI USER

    const { register, handleSubmit } = useForm({});
    const onsubmitbill = (data: any) => {
        try {
            if (data.name == "" || data.phone == "" || data.location == "") {
                message.warning("Bạn phải Nhập đầy đủ các Trường !!");
                return;
            }
            if (data.totalprice == 0) {
                message.warning("Giá trị tổng tiền phải lớn hơn 0");
                return;
            }

            console.log(data);

            dispatch(fetchCkeckOutBill(data))
            message.success("Thanh Toán Thanh Công !!")
            console.log(data);

        } catch ({ response }: any) {
            notification.error({
                message: response.data.message,
            });
        }
    }

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
                        {dataCartUser?.map((item: any) => (
                            <div key={item._id} className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
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
                                                onConfirm={() => deleteProductCart(item?.productId?._id)}
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

                    <div id="summary" className="w-full px-8 py-10">
                        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                        <div className='flex w-full justify-between'>
                            <div className="flex justify-between mt-10 mb-5">
                                <span className="font-semibold text-sm uppercase">Total :</span>
                                <span className="font-semibold text-sm">{totalPrices}$</span>
                            </div>
                            <div className='flex items-center'>
                                <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                                <select className="block p-2 text-gray-600 w-full text-sm">
                                    <option>$100</option>
                                </select>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit(onsubmitbill)}>
                            {dataCartUser?.map((cart: any) => (
                                <input type="text"{...register("CartId")} defaultValue={cart?._id} className='hidden' />
                            ))}

                            <div className='flex justify-between gap-[20px] w-full'>
                                <div className="py-10 w-full">
                                    <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Name:</label>
                                    <input type="text" {...register("name")} placeholder="Name" className="p-2 text-sm w-full" />
                                </div>
                                <div className="py-10 w-full">
                                    <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Địa chỉ:</label>
                                    <input type="text" {...register("location")} placeholder="Địa chỉ" className="p-2 text-sm w-full" />
                                </div>
                            </div>
                            <div className='flex justify-between gap-[20px] w-full'>
                                <div className="py-10 w-full">
                                    <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">SĐT:</label>
                                    <input type="text" {...register("phone")} placeholder="Phone" className="p-2 text-sm w-full" />
                                </div>
                                <div className="py-10 w-full">
                                    <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Thanh Toán:</label>
                                    <select className="block p-2 text-gray-600 w-full text-sm">
                                        <option>Thanh Toán Khi Nhận Hàng</option>
                                    </select>
                                </div>
                            </div>

                            <div className="border-t mt-8">
                                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                    <span>Total cost</span>
                                    <input type="text" {...register("totalprice")} value={totalPrices + 100} className='' />
                                    <span>${totalPrices + 100}</span>
                                </div>
                                <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            {/* Bill cart */}
            <div>

            </div>

        </div>
    )
}

export default CartPage