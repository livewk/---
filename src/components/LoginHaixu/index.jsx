import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined} from '@ant-design/icons';
import '../../API'
import {reqLogin} from "../../API";
import {Redirect, useHistory} from "react-router-dom";
import memoryUtils from "../../utils/memoryUtils";
import storageUtils from "../../utils/storageUtils";


const LoginHaixu  = () => {
    // 跳转使用
    const history = useHistory()
    const onFinish = async (values) => {
        const {username, password} = values
        // await等待返回制定结果
        const result = await reqLogin(username, password)
        if (result.status === 1){
            // 提示登陆成功
            message.success('登陆成功')
            // 保存user
            const user = result.user
            // 将数据保存到内存
            memoryUtils.user = user
            // 将数据持久化储存
            storageUtils.seveUser(user)
            // 跳转到管理界面 (不需要再回退回到登陆)
            history.push('/admin')
        }else{
            message.error("登入失败")
        }
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: '用户名不能为空',
                    },
                    {
                        min:6,
                        message: '用户名不能小于6位'
                    },
                    {
                        max:12,
                        message: '用户名不能超过12位'
                    },
                    {
                        pattern:/^[a-zA-Z_@.0-9]+$/,
                        message: '只能包括字母，数字，下划线， @ ，.'
                    }
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: '密码不能为空',
                    },                    {
                        min:6,
                        message: '用户名不能小于6位'
                    }
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="请输入密码"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>记住账号密码</Checkbox>
                </Form.Item>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    登录
                </Button>
            </Form.Item>
        </Form>
    );
};
// withRouter 将组件装饰成路由
export default LoginHaixu