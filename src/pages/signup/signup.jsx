import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from 'antd';

const Signup = ()=>{
     const navigate =useNavigate()
    //  const existValues = JSON.parse(localStorage.getItem(""))
    const onFinish = (values)=>{
        console.log(values);
        localStorage.setItem("signup",JSON.stringify(values))
     
        navigate("/Login")
        

    }
    return(
        <div className="form">
            <Form
    name="basic"
    labelCol={{
      span: 6,
    }}
    wrapperCol={{
      span: 14,
    }}
    style={{width:"100%"}}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    // onFinishFailed={onFinishFailed}
    autoComplete="on"
  >
    <Form.Item
      label="Username"
      name="username"
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
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your Email',
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
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>



    <Form.Item
      wrapperCol={{
        offset: 8,
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
export default Signup