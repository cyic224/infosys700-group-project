import React from "react";
import { Layout, Card } from "antd";
import "antd/dist/antd.css";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { Paper, CardContent, Grid } from "@mui/material";
const { Content } = Layout;

function Authentication() {
  let navigate = useNavigate();

  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = 1;
        return Math.min(oldProgress + diff, 100);
      });
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, []);
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
            <Box sx={{ width: "100%" }}>
              <Card>
                <Grid style={{ paddingBottom: "7px" }}>
                  <h1>NJ7V5X</h1>
                </Grid>
                <LinearProgress variant="determinate" value={progress} />
              </Card>
            </Box>
          </Card>
        </div>
      </Content>
    </Layout>
  );
}

export default Authentication;
