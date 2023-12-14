import {
  ApexDonutChart,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Row,
  SectionTitle,
} from "@doar/components";
import {
  StyledChart,
  StyledFooterBullet,
  StyledFooterDiv,
  StyledFooterText,
  StyledFooterTitle,
} from "./style";

import { sessionsChart } from "@doar/shared/data/dashboard-two";
import { useAppSelector } from "../../../redux/hooks";

const SessoionsChannel3 = () => {
  const { theme } = useAppSelector((state) => state.theme);
  const chartOptions = sessionsChart.options;
  const darkChartOptions = {
    ...chartOptions,
    stroke: {
      colors: ["#1c273c"],
    },
  };
  return (
    <>
      <CardBody
        p={[null, null, null, "25px"]}
        paddingBottom={"42px"}
        height={"100%"}
      >
        <StyledChart>
          <ApexDonutChart
            options={chartOptions}
            series={sessionsChart.series}
            width="100%"
            height="100%"
          />
        </StyledChart>
        {/* <Row marginTop={"35px"}>
                    <Col col={4}>
                        <StyledFooterDiv>
                            <StyledFooterBullet bg="pink" />
                            <StyledFooterTitle>세금계산서</StyledFooterTitle>
                        </StyledFooterDiv>
                    </Col>
                    <Col col={4}>
                        <StyledFooterDiv>
                            <StyledFooterBullet bg="primary" />
                            <StyledFooterTitle>온라인</StyledFooterTitle>
                        </StyledFooterDiv>
                    </Col>
                    <Col col={4}>
                        <StyledFooterDiv>
                            <StyledFooterBullet bg="teal" />
                            <StyledFooterTitle>카드</StyledFooterTitle>
                        </StyledFooterDiv>
                    </Col>
                    <Col col={4} mt="20px">
                        <StyledFooterDiv>
                            <StyledFooterBullet bg="pink" />
                            <StyledFooterTitle>세금계산서</StyledFooterTitle>
                        </StyledFooterDiv>
                    </Col>
                    <Col col={4} mt="20px">
                        <StyledFooterDiv>
                            <StyledFooterBullet bg="primary" />
                            <StyledFooterTitle>온라인</StyledFooterTitle>
                        </StyledFooterDiv>
                    </Col>
                    <Col col={4} mt="20px">
                        <StyledFooterDiv>
                            <StyledFooterBullet bg="teal" />
                            <StyledFooterTitle>카드</StyledFooterTitle>
                        </StyledFooterDiv>
                    </Col>
                </Row> */}
      </CardBody>
      {/* <CardFooter p="20px">
                <Row>
                    <Col col={6}>
                        <StyledFooterText>Organic Search</StyledFooterText>
                        <StyledFooterDiv>
                            <StyledFooterBullet bg="pink" />
                            <StyledFooterTitle>세금계산서</StyledFooterTitle>
                        </StyledFooterDiv>
                    </Col>
                    <Col col={6}>
                        <StyledFooterText>Email</StyledFooterText>
                        <StyledFooterDiv>
                            <StyledFooterBullet bg="primary" />
                            <StyledFooterTitle>
                                987 <small>20%</small>
                            </StyledFooterTitle>
                        </StyledFooterDiv>
                    </Col>
                    <Col col={6} mt="20px">
                        <StyledFooterText>Referrral</StyledFooterText>
                        <StyledFooterDiv>
                            <StyledFooterBullet bg="teal" />
                            <StyledFooterTitle>
                                2,010 <small>30%</small>
                            </StyledFooterTitle>
                        </StyledFooterDiv>
                    </Col>
                    <Col col={6} mt="20px">
                        <StyledFooterText>Social Media</StyledFooterText>
                        <StyledFooterDiv>
                            <StyledFooterBullet bg="orange" />
                            <StyledFooterTitle>
                                1,054 <small>25%</small>
                            </StyledFooterTitle>
                        </StyledFooterDiv>
                    </Col>
                </Row>
            </CardFooter> */}
    </>
  );
};

export default SessoionsChannel3;
