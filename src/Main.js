import React from "react";
import { Layout, Card, Button } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import { useNavigate } from "react-router-dom";
const { Content } = Layout;

function Main() {
  let navigate = useNavigate();
  return (
    <Layout>
      <Content>
        <div className="site-card-border-less-wrapper">
          <Card
            title="Welcome, admin"
            bordered={false}
            style={{
              width: "24%",
              height: "50vh",
              textAlign: "center",
            }}
          >
            <div style={{ marginTop: "40px" }}>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onClick={() => navigate("/Transaction")}
              >
                New Transaction
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Recent Transaction
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Oversea Payment
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Recent Statement
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Setting
              </Button>
            </div>
          </Card>
        </div>
      </Content>
    </Layout>
  );
}

export default Main;
