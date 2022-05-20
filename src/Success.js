import React from "react";
import { Layout, Card, Button, Result } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;

function Success() {
  let navigate = useNavigate();
  return (
    <Layout>
      <Content>
        <div className="site-card-border-less-wrapper">
          <Card
            bordered={false}
            style={{ width: "30%", height: "100%", textAlign: "center" }}
          >
            <Result
              status="success"
              title="Your transaction has been successful!"
              extra={[
                <Button
                  type="primary"
                  key="console"
                  onClick={() => navigate("/Main")}
                >
                  Back
                </Button>,
              ]}
            />
          </Card>
        </div>
      </Content>
    </Layout>
  );
}

export default Success;
