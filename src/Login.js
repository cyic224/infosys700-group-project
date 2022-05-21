import React from "react";
import { Layout, Card, Form, Input, Button, Checkbox, Modal,Popconfirm, message } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import { Alert, Collapse, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const { Content } = Layout;

function Login() {
  let navigate = useNavigate();

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [account, setAccount] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [alert, setAlert] = React.useState(false);
  const [modalAlert, setModalAlert] = React.useState(false);
  const [veriCode, setVeriCode] = React.useState("");
  const [isWifi,setIsWifi] = React.useState(true)
  const [wifiALert,setWifiAlert] = React.useState(false)

  const handleWifiStatus=()=>{
    if (isWifi===true){
      setIsModalVisible(true);
    }
  }
  function confirm(e) {
  console.log(e);
  message.success('Action continued with Wifi, take care with your important information.');
  setIsModalVisible(true)
}

function cancel(e) {
  console.log(e);
  message.error('Login cancelled.');
}

  const handleSubmit = () => {
    if (
      account !== null &&
      account === "admin" &&
      password != null &&
      password === "admin"
    ) {
      setAlert(false);
    } else {
      setAlert(true);
    }
  };

  const handleOk = () => {
    if (veriCode === "NJ7V5X") {
      setIsModalVisible(false);
      navigate("/Main");
      setAccount("");
      setPassword("");
      setVeriCode("");
    } else {
      setModalAlert(true);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Layout>
      <Content>
        <div className="site-card-border-less-wrapper">
          <Card
            title="XXX Banking Interface Login"
            bordered={false}
            style={{ width: "30%", height: "100%", textAlign: "center" }}
          >
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
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              autoComplete="off"
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
                <Popconfirm
                  title="Public Wifi detected, your information are having a risk of leak. Press OK to proceed or cancel login."
                  onConfirm={confirm}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={handleSubmit}
                    className="login-form-button"
                  >
                    Submit
                  </Button>
                </Popconfirm>
            </Form>
            <Modal
              title="Two Factor Authentication"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
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
              <Input
                placeholder="Enter your dynamic authentication code"
                value={veriCode}
                onChange={(e) => setVeriCode(e.target.value)}
              />
            </Modal>
          </Card>
        </div>
      </Content>
    </Layout>
  );
}

export default Login;
