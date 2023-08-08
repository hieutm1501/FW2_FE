import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { fetchBillCancel, fetchUserBill } from "../../redux/billSlice";
import { Button, message, Popconfirm } from 'antd';


const BillClient = () => {
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
        dispatch(fetchUserBill())
    }, [dispatch])
    console.log("billAll", billUser?.bill);

    // HUỶ ĐƠN HÀNG
    const confirmDelete = async (productId: string) => {
        try {
            await dispatch(fetchBillCancel(productId))
            await dispatch(fetchUserBill())
            message.success('Product deleted successfully');
        } catch (error) {
            if (!error) {
                setTimeout(message.loading('đang sử lí ..'), 2000)
            } else {
                message.error(`Failed to delete Bill: ${error}`);
            }
        }
    };
    const confirm = (e: React.MouseEvent<HTMLElement>) => {
        console.log(e);
        message.success('Click on Yes');
    };

    const cancel = (e: React.MouseEvent<HTMLElement>) => {
        console.log(e);
        message.error('Click on No');
    };

    return (
        <div>
            <h1 className="text-center text-[20px] font-[700] py-[20px]">Tất Cả Đơn Hàng</h1>
            <div className="bg-[#E6E7E9] mx-[100px] ">
                {billUser?.bill ? (<div className='flex justify-center items-center gap-[50px] mx-[100px] py-[50px] '>
                    <div className="w-3/12 ">
                        <img src="https://res.cloudinary.com/dwp7umncy/image/upload/v1689996201/shopinterior/yo6ibeakr7lqokv1gc45.jpg" alt="img" />
                    </div>
                    <div className="w-full">
                        <h2>Tên Khách Hàng : {billUser?.bill?.name}</h2>
                        <p>Tài Khoản : {billUser?.bill?.userId?.email}</p>
                        <p>Địa chỉ Nhận Hàng : {billUser?.bill?.location}</p>
                        <p>Tiền Cần Thanh Toán : {billUser?.bill?.totalprice}$</p>
                        <p>Trạng Thái : {billUser?.bill?.status}</p>
                        <p>Thời gian đặt hàng : {billUser?.bill?.createdAt}</p>
                        <Popconfirm
                            title="Chọn Yes or No"
                            description="Bạn muốn Huỷ Đơn Hàng?"
                            onConfirm={() => confirmDelete(billUser?.bill?._id)}
                            onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button danger>Huỷ Đơn Hàng</Button>
                        </Popconfirm>
                    </div>
                </div>) : (<div className="text-center text-[20px]">Không có sản phẩm nào !!</div>)}
            </div>
        </div>
    )
}

export default BillClient