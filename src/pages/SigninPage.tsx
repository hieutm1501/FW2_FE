import { signin } from '../api/auth'
import Cookies from "js-cookie";
import { Link, useNavigate } from 'react-router-dom'
import { IUsers } from '../interface/product'
import { Button, Checkbox, Form, Input, message } from 'antd';
import { FacebookOutlined, GooglePlusOutlined } from '@ant-design/icons'



const SigninPage = () => {
    const navigate = useNavigate()
    const onFinish = async (values: IUsers) => {
        try {
            message.loading({ content: 'Logging in...', key: 'login' });

            setTimeout(async () => {
                const res = await signin(values);
                // localStorage.setItem('user', JSON.stringify(res.data));
                Cookies.set("accessToken", res?.data?.accessToken, {
                    expires: new Date(Date.now() + 30 * 60 * 1000),
                });
                console.log(res);

                if (res.data.user.role == 'admin') {
                    message.success('Đăng nhập thành công Admin !');
                    navigate('/admin');
                } else {
                    message.success('Đăng nhập thành công !');
                    navigate('/');
                }
            }, 2000);
        } catch (error: any) {
            message.error(error.response.data.message);
        } finally {
            setTimeout(() => message.destroy('login'), 2000);
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
                                <h1 className='text-[20px] font-[700] mt-[10px]'>Đăng Nhập</h1>
                            </div>
                            <div className='pt-[10px]'>
                                <Link to={`/`}>
                                    <p>Bạn cần giúp đỡ !</p>
                                </Link>
                            </div>
                        </div>

                        <div className=' md:flex px-[50px]'>
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
                                        <h1 className='text-[25px] font-[700]'>Đăng Nhập</h1>
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

                                    <Form.Item valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                                        <div className='md:flex justify-between '>
                                            <Checkbox className='pt-[10px]'>Remember me</Checkbox>
                                            <Link to={`/`} className='pt-[10px] text-red-500'>
                                                Forgot password?
                                            </Link>
                                        </div>
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
                                            <p className='font-[600]'>Bạn mới biết đến Interior?</p>
                                            <Link to={`/signup`} className='font-[600] text-blue-500'>Đăng Kí ?</Link>
                                        </div>


                                    </Form.Item>

                                </Form>

                            </div>
                            <div className='w-full'>
                                <img src="https://rurutek.com/jio/assets/img/login-animate.gif" alt="" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SigninPage