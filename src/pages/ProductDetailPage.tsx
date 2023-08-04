import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getOne } from '../api/product';
import { IProduct } from '../interface/product';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { fetchAddToCart } from '../redux/cartSlice';
import { message } from 'antd';



const ProductDetaliPage = () => {
    const { id } = useParams()
    const [products, setProducts] = useState<IProduct>({} as IProduct)
    useEffect(() => {
        getOne(String(id)).then(({ data: { product } }) => setProducts(product))
    }, [])
    console.log('detail', products);
    const { register, handleSubmit, setValue } = useForm({});
    useEffect(() => {
        setValue('productId', products._id); // Đặt giá trị mặc định cho trường 'id'
    }, [products._id, setValue]);

    // REDUX CALL
    const dispatch = useDispatch()
    const onSubmit = async (data: any) => {
        try {
            console.log(data);
            dispatch(fetchAddToCart(data));

            // Hiển thị thông báo loading
            message.loading({ content: 'Đang xử lý...', duration: 2 });

            await new Promise((resolve) => setTimeout(resolve, 1500));

            // Hiển thị thông báo thành công
            message.success('Thêm vào giỏ hàng thành công !!');
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <section className='pt-[80px] mb-[80px]'>
                <div className="relative mx-auto max-w-screen-xl px-4 py-8">
                    <div>
                        <h1 className="text-2xl font-bold lg:text-3xl">{products.name}</h1>

                        <p className="mt-1 text-sm text-gray-500">SKU: Detail Product</p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
                        <div className="lg:col-span-3">
                            <div className="relative mt-4">
                                <img
                                    alt="Tee"
                                    src={`${products.image}`}
                                    className="h-72 w-full rounded-xl object-cover lg:h-[540px]"
                                />

                                <div className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-black/75 px-3 py-1.5 text-white">
                                    <svg
                                        className="h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                        />
                                    </svg>

                                    <span className="ms-1.5 text-xs"> Hover to zoom </span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:sticky lg:top-0">
                            <form className="space-y-4 lg:pt-8" onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("productId")} type="text" className="hidden" />
                                <fieldset>
                                    <legend className="text-lg font-bold">Category</legend>

                                    <div className="mt-2 flex flex-wrap gap-1">
                                        <label htmlFor="material_cotton" className="cursor-pointer">
                                            <input
                                                type="radio"
                                                id="material_cotton"
                                                name="material"
                                                className="peer sr-only"
                                                checked
                                            />

                                            <span
                                                className="block rounded-full border border-gray-200 px-3 py-1 text-xs peer-checked:bg-gray-100"
                                            >
                                                {products?.categoryId?.name}
                                            </span>
                                        </label>

                                    </div>
                                </fieldset>

                                <div className="rounded border bg-gray-100 p-4">
                                    <p className="text-sm">
                                        <span className="block"> Pay as low as $1500/mo with 0% APR. </span>

                                        <a href="" className="mt-1 inline-block underline"> Find out more </a>
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xl text-red-500 font-bold">${products.price}</p>
                                </div>
                                <fieldset>
                                    <legend className="text-lg font-bold">Quantity</legend>
                                    <input type="number" {...register("quantity")} defaultValue={1} min={1} max={5} className=' rounded-sm bg-[#ebebeb] border-[10px] py-[4px]' />
                                </fieldset>

                                <button
                                    type="submit"
                                    className="w-full rounded bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
                                >
                                    Add to cart
                                </button>

                                <button
                                    type="button"
                                    className="w-full rounded border border-gray-300 bg-gray-100 px-6 py-3 text-sm font-bold uppercase tracking-wide"
                                >
                                    Notify when on sale
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ProductDetaliPage