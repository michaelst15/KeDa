import React from "react";
import { useNavigate } from "react-router";
import User from './user.png';
import backgroundUser from './background-user.jpg';
import { Form, Input, Button, Checkbox, Card, Typography, message } from "antd";
import { MailOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";


export default function Login() {


  const navigation = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigation('/')
  };


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: `url(${backgroundUser})`, // Apply the background image here
        backgroundSize: "cover",
      }}
    >
      <Card style={{ width: 500, backgroundColor: "#c9d6ff" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={User} alt="" style={{ width: 70, marginBottom: 20 }} />
        </div>
        <Form
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            id="email"
            rules={[{ required: true, message: "Tulis Email Anda!" }]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              type="email"
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            id="password"
            rules={[{ required: true, message: "Tulis Password Anda!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button
              onClick={() => navigation('/')}
              type="primary"
              htmlType="submit"
              className="login-form-button"
              block
            >
              Log in
            </Button>
            Belum punya akun{" "}? {" "}
            <a href="" onClick={handleRegister}>
              sign up
            </a>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};


