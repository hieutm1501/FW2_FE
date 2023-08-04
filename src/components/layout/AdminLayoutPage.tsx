import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { CarryOutOutlined, HomeOutlined, ImportOutlined, PlusCircleOutlined, PlusSquareOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';


const { Header, Content, Sider } = Layout;

// const items1: MenuProps['items'] = ['Thêm sản Phẩm', 'Thêm Danh mục', 'Thêm Gì Đó'].map((key) => ({
//     key,
//     label: `${key}`,
// }));
const items1: MenuProps['items'] = [
    {
        key: "sub1",
        icon: <ImportOutlined />,
        label: <Link to={"/"}>Trang Chủ</Link>
    },
    {
        key: "sub2",
        icon: <PlusSquareOutlined />,
        label: <Link to={"/admin/add"}>Thêm Sản Phẩm</Link>
    },
    {
        key: "sub3",
        icon: <PlusCircleOutlined />,
        label: <Link to={"/admin/categories/add"}>Thêm Danh Mục</Link>
    }
]


const items2: MenuProps['items'] = [
    {
        key: 'sub1',
        icon: <HomeOutlined />,
        label: <Link to={'/admin'}>Home</Link>,
        children: []
    },
    {
        key: 'sub2',
        icon: React.createElement(UserOutlined),
        label: <Link to={'/admin/users'}>User</Link>,
        children: [
            { key: '1', label: 'Admin' },
            { key: '2', label: 'Member' }
        ]
    },
    {
        key: 'sub3',
        icon: <CarryOutOutlined />,
        label: <Link to={'/admin/categories'}> <button>Danh Mục</button> </Link>,
        children: [

        ]
    }
];



const AdminLayoutPage = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <div className=''>
            <aside> <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={items1} />
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: colorBgContainer }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                            items={items2}
                        />
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                                background: colorBgContainer,
                            }}
                        >
                            <main><Outlet /></main>
                        </Content>
                    </Layout>
                </Layout>
            </Layout></aside>

        </div>
    )
}

export default AdminLayoutPage