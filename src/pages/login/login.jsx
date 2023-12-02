import { useDispatch } from "react-redux";
import { Button, Checkbox, Form, Input } from 'antd';
import { loginUser } from "../store/reducer";
import { useNavigate } from "react-router-dom";
import "./login.css"
const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // console.log(dispatch)
    const onFinish = (values) => {

        console.log(values);
        const signupUser = JSON.parse(localStorage.getItem("signup"));
        if (signupUser) {
            // localStorage.setItem("user", JSON.stringify(values))

            if (signupUser.password === values.password && signupUser.email === values.email) {

                dispatch(loginUser(signupUser))
                alert("login in succesfull")
                navigate("/Expence")
            } else {
                alert("invalid passward")
            }
        } else {
            alert("invalid credintial")
        }
        localStorage.setItem("login", JSON.stringify(values))
    }

    return (
        <div className="form">
            <Form
                name="basic"
                labelCol={{
                    span: 5,
                }}
                wrapperCol={{
                    span: 18,
                }}
                style={{ width: "80%" }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}

                autoComplete="on"
            >
                <Form.Item
                    label="Username"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>



                <Form.Item
                    wrapperCol={{
                        offset: 5,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

        </div>
    )
}
export default Login