import { useEffect } from 'react'
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import { fetchProductsAll } from '../redux/productSlice';



const HomePage = () => {

    const products = useSelector((state: RootState) => state.product.entities)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProductsAll())
    }, [])

    // console.log("redux", products);


    return (
        <div>
            <section
                className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-white opacity-[.37] sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div className="relative  mx-auto  px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8" >
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            Let us find your

                            <strong className="block font-extrabold text-rose-700">
                                Forever Home.
                            </strong>
                        </h1>

                        <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                            tenetur fuga ducimus numquam ea!
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 justify-center">
                            <div>
                                <Link to={`/`} className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                                    Get Started
                                </Link>
                            </div>

                            <div>
                                <Link to={`/`} className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className=" py-16">
                <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
                    <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                        <img src="../src/assets/ship.svg" alt="Delivery" className="w-12 h-12 object-contain" />
                        <div>
                            <h4 className="font-medium capitalize text-lg">Free Shipping</h4>
                            <p className="text-gray-500 text-sm">Order over $200</p>
                        </div>
                    </div>
                    <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                        <img src="../src/assets/money.svg" alt="Delivery" className="w-12 h-12 object-contain" />
                        <div>
                            <h4 className="font-medium capitalize text-lg">Money Rturns</h4>
                            <p className="text-gray-500 text-sm">30 days money returs</p>
                        </div>
                    </div>
                    <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                        <img src="../src/assets/24h.svg" alt="Delivery" className="w-12 h-12 object-contain" />
                        <div>
                            <h4 className="font-medium capitalize text-lg">24/7 Support</h4>
                            <p className="text-gray-500 text-sm">Customer support</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-[20px] py-16">
                <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">shop by category</h2>
                <div className="grid grid-cols-3 gap-3 ">
                    <div className="relative rounded-sm overflow-hidden group">
                        <img src="../src/assets/category-1.jpg" alt="category 1" className="w-full" />
                        <a href="#"
                            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Bedroom</a>
                    </div>
                    <div className="relative rounded-sm overflow-hidden group">
                        <img src="../src/assets/category-2.jpg" alt="category 1" className="w-full" />
                        <a href="#"
                            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Mattrass</a>
                    </div>
                    <div className="relative rounded-sm overflow-hidden group">
                        <img src="../src/assets/category-3.jpg" alt="category 1" className="w-full" />
                        <a href="#"
                            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Outdoor
                        </a>
                    </div>
                    <div className="relative rounded-sm overflow-hidden group">
                        <img src="../src/assets/category-4.jpg" alt="category 1" className="w-full" />
                        <a href="#"
                            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Sofa</a>
                    </div>
                    <div className="relative rounded-sm overflow-hidden group">
                        <img src="../src/assets/category-5.jpg" alt="category 1" className="w-full" />
                        <a href="#"
                            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Living
                            Room</a>
                    </div>
                    <div className="relative rounded-sm overflow-hidden group">
                        <img src="../src/assets/category-6.jpg" alt="category 1" className="w-full" />
                        <a href="#"
                            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Kitchen</a>
                    </div>
                </div>
            </div>

            <div className="mx-[20px] pb-16">
                <a href="#">
                    <img src="../src/assets/offer.jpg" alt="ads" className="w-full" />
                </a>
            </div>

            {/*  */}

            <div>
                <section>
                    <div className=" py-8 mx-auto sm:px-6 sm:py-12 ">
                        <header>
                            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                                TOP NEW ARRIVAL
                            </h2>
                        </header>

                        <div className=''>
                            <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
                                {products?.products?.slice(0, 4).map((item: any) => (
                                    <li key={item._id}>
                                        <Link to={`/products/${item._id}`} className="group relative block overflow-hidden">
                                            <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                                                <span className="sr-only">Wishlist</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                                </svg>
                                            </button>
                                            <img src={`${item.image}`} alt="" className="h-[288px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[288px]" />
                                            <div className="relative border border-gray-100 bg-white p-6">
                                                <h3 className="mt-4 h-[60px] text-lg  font-[600] text-gray-900">{item.name}</h3>
                                                <p className="mt-1.5 text-[18px] font-[600] text-gray-700">${item.price}</p>
                                                <form className="mt-4">
                                                    <button className="block w-full rounded bg-[#ef4444] p-4 text-sm font-medium transition hover:scale-105">
                                                        Add to Cart
                                                    </button>
                                                </form>
                                            </div>
                                        </Link>

                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='flex justify-center my-[40px]'>
                            <Link to={`/products`}>
                                <Button type="primary" block>
                                    All Product
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
            {/* cart */}

        </div >
    )
}

export default HomePage;