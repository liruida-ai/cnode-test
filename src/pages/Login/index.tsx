
import React, { useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import axios from "axios";
import './index.less'
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 10 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
const buttonLayout = {
    wrapperCol: { offset: 4, span: 10 },
};
const Login = (props:any) => {
    useEffect(() => {
        const code = new URLSearchParams(window.location.search).get('code');
        if (code) {
            //这里不能写按需加载，可能会导致权限不够
            axios.post("https://github.com/login/oauth/access_token", {
                "code": code,
                "client_secret": "33965537c45eb7b17010f5b0514c582f9b32f0f7",
                "client_id": "a43aae487ed31eccaea0",
                "scope": "repo"
            }, {
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json;charset=UTF-8",
                },
            }).then(response => {
                localStorage.setItem("_token", response.data.access_token);
                localStorage.setItem("user",'sasa');
                console.log(response);
                props.history.push('/');
            })
        }

    }, []);
    function onFinish(values: any) {
        console.log('Success:', values);
    }

    function onFinishFailed(errorInfo: any) {
        console.log('Failed:', errorInfo);
    }

    return (
        <div className="login">
            <div className="nav">
                <ul className="breadcrumb">
                    <li><a href="/">主页</a><span className="divider">/</span></li>
                    <li className="active">登录</li>
                </ul>
            </div>
            <div className="inner">
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="账号："
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码："
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    </Form.Item>

                    <Form.Item {...buttonLayout}>
                        <Button type="primary" htmlType="submit">登录</Button>
                        <Button style={{ backgroundColor: '#5bc0de', marginLeft: '10px', color: '#fff' }}><a href={`https://github.com/login/oauth/authorize?scope=repo&client_id=a43aae487ed31eccaea0`}>通过 Github 登录</a></Button>
                        <Button type="link">忘记密码了？</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
};

export default Login;
