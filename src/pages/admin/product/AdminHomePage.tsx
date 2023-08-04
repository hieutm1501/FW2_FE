import { ICategory, IProduct } from '../../../interface/product';
import { Button, message, Popconfirm, Space, Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../redux/store'
import { fetchProductsAll, fetchdeleteProduct } from '../../../redux/productSlice';
import { useEffect } from 'react'

interface ProductData extends IProduct {
    recordKey: string;
}

interface DataType {
    key: string;
    name: string;
    price: number;
    image: string;
}



const AdminHomePage = () => {

    const productss = useSelector((state: RootState) => state.product.entities)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProductsAll())
    }, [])
    const datass: IProduct[] = productss?.products
    const confirmDelete = async (productId: string) => {
        try {
            await dispatch(fetchdeleteProduct(productId))
            await dispatch(fetchProductsAll())
            message.success('Product deleted successfully');

        } catch (error) {
            if (!error) {
                setTimeout(message.loading('đang sử lí ..'), 2000)
            } else {
                message.error(`Failed to delete product: ${error}`);
            }
        }
    };


    const cancelDelete = () => {
        message.error('Product deletion cancelled');
    };

    const uniqueNames = Array.from(new Set(datass?.map((product: any) => product.name)));
    const nameFilters = uniqueNames.map((name) => ({ text: name, value: name }));

    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            width: '30%',
            filters: nameFilters,
            onFilter: (value, record) => record.name.indexOf(value.toString()) === 0,
            sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
            title: 'Price',
            dataIndex: 'price',
            width: '15%',
            sorter: (a, b) => a.price - b.price,
        },
        {
            title: 'Image',
            dataIndex: 'image',
            width: '20%',
            render: (image) => <img src={image} alt="Product" width={150} />,
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            width: '20%',
            render: (_, record) => (
                <Space size="middle">
                    <Link to={`/admin/update/${record.key}`}>
                        <Button className='btn-edit text-[#30D200] border-[#31d200cb] hover:text-[#31d200ba] hover:border-[#30D200] active:border-[#30D200]' >Edit</Button>
                    </Link>
                    <Popconfirm
                        title="Are you sure to delete this product?"
                        onConfirm={() => confirmDelete(record.key)}
                        onCancel={cancelDelete}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="primary" danger>Delete</Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    const data: DataType[] = datass?.map((product) => ({
        key: product._id,
        name: product.name,
        price: product.price,
        image: product.image[0],
    }));

    const productData: ProductData[] = datass?.map((product) => ({
        ...product,
        recordKey: product._id,
    }));
    console.log(productData);

    const handleTableChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('Table parameters:', pagination, filters, sorter, extra);
    };

    return (
        <div id="adminhome">
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 4 }} onChange={handleTableChange} />
        </div>
    );
};

export default AdminHomePage;