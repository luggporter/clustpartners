import {
  ApexAreaChart,
  ApexBarChart,
  ApexLineChart,
  ButtonGroup,
  Card,
  CardBody,
  Col,
  Row,
  SectionTitle,
} from "@doar/components";
import { StyledBody, StyledButton, StyledChart, StyledHeader } from "./style";

import CryptoChart from "../../../components/dashboard-three/crypto-chart2";
import { StyledChart as LineStyled } from "./styleline";
import MetricsProgress from "./metrics-progress";
import { StyledBody as StyledBodyLine } from "./styleLine2";
import { lineOption } from "@doar/shared/data/dashboard-three";
import { ticketChart2 } from "@doar/shared/data/dashboard-four";
import { useAppSelector } from "../../../redux/hooks";
import { webMetricsChart } from "@doar/shared/data/dashboard-two";

const WebsiteMetrics = () => {
  const { theme } = useAppSelector((state) => state.theme);
  const chartOptions = webMetricsChart.options;
  const darkChartOptions = {
    ...chartOptions,
    grid: {
      ...chartOptions.grid,
      borderColor: "rgba(255, 255, 255, 0.06)",
    },
  };
  return (
    <>
      <Col lg={6} mt={["10px", null, null, "0px"]}>
        <Card>
          <CardBody>
            <StyledHeader>
              <div>
                <SectionTitle
                  title="매출"
                  desc="매출 타이틀 관련 간단한 설명 넣어주세요."
                  descProps={{ fontSize: "12px" }}
                />
              </div>
            </StyledHeader>
            <StyledBody>
              <Row>
                <Col>
                  <StyledChart>
                    <ApexBarChart
                      options={
                        theme !== "dark" ? chartOptions : darkChartOptions
                      }
                      series={webMetricsChart.series}
                      width="100%"
                      height="100%"
                    />
                  </StyledChart>
                </Col>
              </Row>
            </StyledBody>
          </CardBody>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <CardBody>
            <StyledHeader>
              <div>
                <SectionTitle
                  title="누적 매출"
                  desc="누적 매출 타이틀 관련 간단한 설명 넣어주세요."
                  descProps={{ fontSize: "12px" }}
                />
              </div>
            </StyledHeader>
            <StyledBodyLine>
              <Row>
                <Col>
                  <LineStyled>
                    <ApexLineChart
                      options={ticketChart2.options}
                      series={ticketChart2.series}
                      height="350px"
                      width="100%"
                    />
                  </LineStyled>
                </Col>
              </Row>
            </StyledBodyLine>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default WebsiteMetrics;
