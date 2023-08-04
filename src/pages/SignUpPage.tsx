import { signup } from '../api/auth'
import { Link, useNavigate } from 'react-router-dom'
import { IUsers } from '../interface/product'
import { Button, Form, Input, message } from 'antd';
import { FacebookOutlined, GooglePlusOutlined } from '@ant-design/icons'






const SignUpPage = () => {
    const navigate = useNavigate()
    const onFinish = async (values: IUsers) => {
        try {
            const res = await signup(values);
            message.success('Đăng kí thành công !');
            navigate('/signin');
            console.log(res);
        } catch (error: any) {
            if (!error) {
                setTimeout(() => message.loading("Đang xử lí"), 2000)
            } else {
                message.error(error.response.data.message);

            }
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <div className="">
                <div className="">
                    <div className="">
                        <div className='flex justify-between items-center py-[15px] bg-blue-500 px-[50px] md:px-[100px]'>
                            <div className='flex gap-2'>
                                <Link to={`/`}>
                                    <img width={"70px"} src="https://res.cloudinary.com/dwp7umncy/image/upload/v1689940199/shopinterior/form/logohome_zdtgzj.png" alt="logo" />
                                </Link>
                                <h1 className='text-[20px] font-[700] mt-[10px]'>Đăng Kí</h1>
                            </div>
                            <div className='pt-[10px]'>
                                <Link to={`/`}>
                                    <p>Bạn cần giúp đỡ !</p>
                                </Link>
                            </div>
                        </div>

                        <div className=' md:flex px-[50px] items-center'>
                            <div className='w-full flex items-center ' >
                                <Form
                                    name="basic"
                                    labelCol={{ span: 8 }}
                                    wrapperCol={{ span: 16 }}
                                    style={{ maxWidth: 600, width: "100%" }}
                                    initialValues={{ remember: true }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"

                                >
                                    <Form.Item
                                        wrapperCol={{ offset: 8, span: 16 }}
                                    >
                                        <h1 className='text-[25px] font-[700]'>Đăng Kí</h1>
                                    </Form.Item>

                                    <Form.Item
                                        label="Name"
                                        name="name"
                                        rules={[{ required: true, message: 'Please input your name!' }]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[{ required: true, message: 'Please input your email!' }]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        label="Password"
                                        name="password"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                    >
                                        <Input.Password />
                                    </Form.Item>

                                    <Form.Item
                                        label="ConfirmPassword"
                                        name="confirmPassword"
                                        rules={[{ required: true, message: 'Please input your ConfirmPassword!' }]}
                                    >
                                        <Input.Password />
                                    </Form.Item>

                                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                        <Button type="primary" htmlType="submit">
                                            Submit
                                        </Button>
                                    </Form.Item>

                                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                        <div
                                            className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                            <p
                                                className="mx-4 mb-0 text-center font-semibold dark:text-white">
                                                Or
                                            </p>
                                        </div>
                                        <div className='flex justify-center gap-[20px] '>
                                            <div className='text-center flex justify-center items-center gap-2 border-[2px] w-full'>
                                                <FacebookOutlined className='text-[30px] text-blue-500' />
                                                <span className='text-[18px] font-[600] '>Facebook</span>
                                            </div>
                                            <div className='text-center flex justify-center items-center gap-2 border-[2px] w-full'>
                                                <GooglePlusOutlined className='text-[30px] text-blue-500' />
                                                <span className='text-[18px] font-[600]'>Google</span>
                                            </div>
                                        </div>
                                        <div className='flex justify-center gap-2 pt-[20px]'>
                                            <p className='font-[600]'>Bạn đã có tài khoản?</p>
                                            <Link to={`/signup`} className='font-[600] text-blue-500'>Đăng Nhập ?</Link>
                                        </div>


                                    </Form.Item>

                                </Form>

                            </div>
                            <div className='w-full'>
                                <img src="https://financeadvisoras.com/assets/images/secure-login.gif" alt="" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SignUpPage