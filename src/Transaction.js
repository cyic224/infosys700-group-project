import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Card, Form, Input, Button } from "antd";
import {
  UserOutlined,
  NumberOutlined,
  DollarOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "./index.css";
import CloseIcon from "@mui/icons-material/Close";
import { Alert, Collapse, IconButton } from "@mui/material";

const { Content } = Layout;

const Transaction = () => {
  const [veriCode, setVeriCode] = React.useState("");
  const [veriCodeAlert, setVeriCodeAlert] = React.useState("");
  const [payee, setPayee] = React.useState("");
  const [accountNumber, setAccountNumber] = React.useState("");
  const [amount, setAmount] = React.useState("");
  let navigate = useNavigate();

  const handleSubmit = () => {
    if (veriCode === "NJ7V5X" && payee && accountNumber && amount) {
      navigate("/Success");
      setPayee("");
      setAccountNumber("");
      setAmount("");
      setVeriCode("");
    } else {
      setVeriCodeAlert(true);
    }
  };
  return (
    <Layout>
      <Content>
        <div className="site-card-border-less-wrapper">
          <Card
            title="Dynamic Athentication Code"
            bordered={false}
            style={{
              width: "24%",
              height: "50vh",
              textAlign: "center",
            }}
          >
            <Form layout="horizontal">
              <Form.Item>
                <Input
                  placeholder="Payee"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  value={payee}
                  onChange={(e) => setPayee(e.target.value)}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  placeholder="Account Number"
                  prefix={<NumberOutlined className="site-form-item-icon" />}
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  placeholder="Transaction Acmount"
                  prefix={<DollarOutlined className="site-form-item-icon" />}
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  placeholder="Authentication Code"
                  prefix={
                    <SafetyCertificateOutlined className="site-form-item-icon" />
                  }
                  value={veriCode}
                  onChange={(e) => setVeriCode(e.target.value)}
                />
              </Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onClick={handleSubmit}
              >
                Make Transaction
              </Button>
            </Form>
            <Collapse in={veriCodeAlert}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setVeriCodeAlert(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                style={{ marginTop: "10px" }}
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
};

export default Transaction;
