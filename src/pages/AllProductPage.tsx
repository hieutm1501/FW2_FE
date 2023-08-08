import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchProductsAll, fetchProductsAllcate } from '../redux/productSlice';
import { useEffect, useState } from 'react';
import { fetchCategoryAll } from '../redux/categorySlice';

const AllProductPage = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.product.entities);
    const category = useSelector((state: RootState) => state.category.entities);
    const [selectedCategory, setSelectedCategory] = useState(null); // lưu id cate
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProducts = products?.products?.filter(
        (product: any) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
    ); //tìm kiếm

    const handleChange = (event: any) => {
        setSelectedCategory(event.target.value);
    };
    console.log("gsvfg", products);


    useEffect(() => {
        if (selectedCategory) {
            dispatch(fetchProductsAllcate(selectedCategory));
        } else {
            dispatch(fetchProductsAll());
        }
    }, [selectedCategory, dispatch]);

    useEffect(() => {
        dispatch(fetchCategoryAll());
    }, []);

    return (
        <div className='pt-[50px]'>
            <section>
                <div className='mx-auto  max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
                    <header>
                        <h2 className='text-xl font-bold text-gray-900 sm:text-3xl'>
                            Product Collection
                        </h2>

                        <p className='mt-4 max-w-md text-gray-500'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                            praesentium cumque iure dicta incidunt est ipsam, officia dolor
                            fugit natus?
                        </p>
                    </header>

                    <div className='mt-8 flex items-center justify-between'>
                        <input
                            type='text'
                            placeholder='Search products'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className='block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />

                        <div className='relative'>
                            <select
                                className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
                                value={selectedCategory}
                                onChange={handleChange}
                            >
                                <option value=''>All Categories</option>
                                {category?.categories?.map((category: any) => (
                                    <option key={category._id} value={category._id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>

                            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                                <svg
                                    className='fill-current h-4 w-4'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 20 20'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M9.29289 12.7071C9.68342 13.0976 10.3166 13.0976 10.7071 12.7071L15.6569 7.75736C16.0474 7.36683 16.0474 6.73367 15.6569 6.34314C15.2663 5.95262 14.6332 5.95262 14.2426 6.34314L10 10.5858L5.75736 6.34314C5.36683 5.95262 4.73367 5.95262 4.34314 6.34314C3.95262 6.73367 3.95262 7.36683 4.34314 7.75736L9.29289 12.7071ZM9.29289 7.29289C9.68342 6.90237 10.3166 6.90237 10.7071 7.29289L15.6569 12.2426C16.0474 12.6332 16.0474 13.2663 15.6569 13.6569C15.2663 14.0474 14.6332 14.0474 14.2426 13.6569L10 9.41421L5.75736 13.6569C5.36683 14.0474 4.73367 14.0474 4.34314 13.6569C3.95262 13.2663 3.95262 12.6332 4.34314 12.2426L9.29289 7.29289Z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className='mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                        {filteredProducts?.map((item: any) => (
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
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllProductPage;