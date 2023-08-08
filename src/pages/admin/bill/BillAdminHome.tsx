import { SearchOutlined } from '@ant-design/icons';
import { useRef, useState, useEffect } from 'react';
import Highlighter from 'react-highlight-words';
import type { InputRef } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { ColumnType, ColumnsType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import { Link } from 'react-router-dom';
import { RootState } from '../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBill } from '../../../redux/billSlice';

interface DataType {
    key: string;
    name: string;
    phone: number;
    email: string;
    location: string;
    status: string;
    totalprice: number;
}

type DataIndex = keyof DataType;



const BillAdminHome = () => {
    // CALL API VÀ XỬ LÍ DỮ LIỆU
    const bills = useSelector((state: RootState) => state.bill.entities)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllBill())
    }, [])
    const dataBill = bills?.bill
    console.log("bill", bills);
    // data
    const data: DataType[] = dataBill?.map((bill: any) => {
        return {
            key: (bill._id).toString(),
            name: bill.name,
            phone: bill.phone,
            email: bill.userId.email,
            location: bill.location,
            status: bill.status,
            totalprice: bill.totalprice
        };
    });

    // SỬ LÍ TÌM KIẾM VÀ LỌC SẢN PHẨM ANTD
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);

    const handleSearch = (
        selectedKeys: string[],
        confirm: (param?: FilterConfirmProps) => void,
        dataIndex: DataIndex,
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<DataType> => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText((selectedKeys as string[])[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    // XỬ LÍ TẠO CÁC BẢNG TABLE
    const columns: ColumnsType<DataType> = [
        {
            title: 'Tên Người Nhận',
            dataIndex: 'name',
            key: 'name',
            width: '15%',
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
            width: '15%',
            ...getColumnSearchProps('phone'),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            width: '15%',
            ...getColumnSearchProps('email'),
            sorter: (a, b) => a.email.length - b.email.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
            width: '25%',
            ...getColumnSearchProps('location'),
            sorter: (a, b) => a.location.length - b.location.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Price',
            dataIndex: 'totalprice',
            key: 'totalprice',
            width: '15%',
            ...getColumnSearchProps('totalprice'),
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: '13%',
            ...getColumnSearchProps('status'),
            sorter: (a, b) => a.status.length - b.status.length,
            sortDirections: ['descend', 'ascend'],
        }, {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            width: '20%',
            render: (_, record) => (
                <Link to={`/admin/bill/update/status/${record.key}`}>
                    <Button className='btn-edit text-[#30D200] border-[#31d200cb] hover:text-[#31d200ba] hover:border-[#30D200] active:border-[#30D200]' >Edit Status</Button>
                </Link>
            ),
        },
    ];

    return (
        <div>
            <Table columns={columns} pagination={{ pageSize: 5 }} dataSource={data} />

        </div>
    )

}

export default BillAdminHome