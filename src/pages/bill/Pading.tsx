import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { fetchBillConfirmed } from "../../redux/billSlice";


const Pading = () => {
    const navigate = useNavigate();
    // NGĂN CHẠN NGƯỜI DÙNG KHI CHƯA ĐĂNG NHẬP
    const accessToken = Cookies.get("accessToken");
    useEffect(() => {
        if (!accessToken) {
            navigate("/signin");
            message.warning("Bạn phải đăng nhập để truy cập giỏ hàng");
        }
    }, [accessToken, navigate]);

    //CALL REDUX
    const billUser = useSelector((state: RootState) => state.bill.entities)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchBillConfirmed())
    }, [dispatch])
    console.log("billConfirmed", billUser?.bills);


    return (
        <div>
            <h1 className="text-center text-[20px] font-[700] py-[20px]">Đơn Hàng Đã Mua</h1>
            <div className="bg-[#E6E7E9] mx-[100px] ">
                {billUser?.bills?.map((item: any) => (
                    <div key={item._id} className='flex justify-center items-center gap-[50px] mx-[100px] py-[50px] '>
                        <div className="w-3/12 ">
                            <img src="https://res.cloudinary.com/dwp7umncy/image/upload/v1689996201/shopinterior/yo6ibeakr7lqokv1gc45.jpg" alt="img" />
                        </div>
                        <div className="w-full">
                            <h2>Tên Khách Hàng : {item.name}</h2>
                            <p>Tài Khoản : {item.userId?.email}</p>
                            <p>Địa chỉ Nhận Hàng : {item.location}</p>
                            <p>Tiền Cần Thanh Toán : {item.totalprice}$</p>
                            <p>Trạng Thái : {item.status}</p>
                            <p>Thời gian đặt hàng : {item.createdAt}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pading