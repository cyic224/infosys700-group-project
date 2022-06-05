import React from "react";
import { Layout, Card, Form, Input, Button } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import { Alert, Collapse, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import {
  UserOutlined,
  LockOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

const { Content } = Layout;

function Login() {
  let navigate = useNavigate();
  let loginAttempts = 0;

  const [account, setAccount] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [alert, setAlert] = React.useState(false);
  const [modalAlert, setModalAlert] = React.useState(false);
  const [veriCode, setVeriCode] = React.useState("");
  const [detectionAlert, setDetectionAlert] = React.useState(false);
  const [veriInput, setVeriInput] = React.useState(false);
  const [disableLogin, setDisableLogin] = React.useState(false);
  const [loginLockAlert, setLoginLockAlert] = React.useState(false);

  const handleVeriCode = () => {
    setDetectionAlert(false);
    setVeriInput(true);
  };

  const handleSubmit = () => {
    if (
      account !== null &&
      account === "admin" &&
      password != null &&
      password === "admin" &&
      veriInput === false
    ) {
      setDetectionAlert(true);
    } else if (veriCode === "NJ7V5X" && veriInput === true) {
      navigate("/Main");
      setAccount("");
      setPassword("");
      setVeriCode("");
    } else if (veriCode !== "NJ7V5X" && veriInput === true) {
      setModalAlert(true);
    } else if (loginAttempts >= 4) {
      setDisableLogin(true);
      setLoginLockAlert(true);
    } else {
      setAlert(true);
      const count = loginAttempts++;
      console.log(loginAttempts);
    }
  };

  return (
    <Layout>
      <Content>
        <div className="site-card-border-less-wrapper">
          <Card
            title=" Online Banking Login Protptype"
            bordered={false}
            style={{
              width: "24%",
              height: "50vh",
              textAlign: "center",
            }}
          >
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              autoComplete="off"
              style={{ marginTop: "70px" }}
            >
              <Form.Item
                name="account"
                required
                value={account}
                onChange={(e) => setAccount(e.target.value)}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Account"
                />
              </Form.Item>
              <Form.Item
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Collapse in={veriInput}>
                <Form.Item
                  name="verificationCode"
                  required
                  value={veriCode}
                  onChange={(e) => setVeriCode(e.target.value)}
                >
                  <Input
                    placeholder="6 digits code"
                    prefix={
                      <SafetyCertificateOutlined className="site-form-item-icon" />
                    }
                  />
                </Form.Item>
              </Collapse>
              <Button
                type="primary"
                htmlType="submit"
                onClick={handleSubmit}
                className="login-form-button"
                disabled={disableLogin}
              >
                Login
              </Button>
              <Collapse in={loginLockAlert}>
                <Alert
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setLoginLockAlert(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                  sx={{ mb: 2 }}
                  severity="error"
                >
                  MAX FAIL TIME ATTEMPTED, LOGIN LOCKED.
                </Alert>
              </Collapse>
              <Collapse in={alert}>
                <Alert
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setAlert(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                  sx={{ mb: 2 }}
                  severity="error"
                >
                  Incorrect account or password!
                </Alert>
              </Collapse>
              <Collapse in={detectionAlert}>
                <Alert
                  action={
                    <Button
                      size="small"
                      style={{ marginTop: "30px" }}
                      onClick={handleVeriCode}
                    >
                      OK
                    </Button>
                  }
                  severity="info"
                >
                  Public Wifi detected. To prevent data leakage. Press OK to
                  proceed login.
                </Alert>
              </Collapse>
            </Form>
            <Collapse in={modalAlert}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setModalAlert(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
                severity="error"
              >
                Incorrect code, please try again!
              </Alert>
            </Collapse>
          </Card>
        </div>
      </Content>
    </Layout>
  );
}

export default Login;
