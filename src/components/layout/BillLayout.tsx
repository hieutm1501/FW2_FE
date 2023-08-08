import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const BillLayout = () => {
    return (
        <div>
            <div className='flex justify-center w-full bg-red-500 pt-[80px]'>
                <div className="" >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to={`/bill`} className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-0 md:dark:text-blue-500">
                                Đơn Hàng
                            </Link>
                        </li>
                        <li>
                            <Link to={`/bill/pading`} className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-0 md:dark:text-blue-500">
                                Đang Chuẩn Bị
                            </Link>
                        </li>
                        <li>
                            <Link to={`/bill/delivering`} className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-0 md:dark:text-blue-500">
                                Đang Giao
                            </Link>
                        </li>
                        <li>
                            <Link to={`/bill/received`} className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-0 md:dark:text-blue-500">
                                Đã Giao
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default BillLayout