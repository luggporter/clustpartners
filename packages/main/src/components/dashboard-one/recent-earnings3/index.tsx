import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Media,
  MediaBody,
  SectionTitle,
} from "@doar/components";
import {
  StyledHeader,
  StyledMedaLeft,
  StyledMediaSub,
  StyledMediaTitle,
  StyledMediaWrap,
  StyledTD,
  StyledTDRate,
  StyledTH,
  StyledTable,
} from "./style";

import { BarChart2 } from "react-feather";
import { flatDeep } from "@doar/shared/methods";
import { recentEarnings } from "@doar/shared/data/dashboard-one";

const RecentEarnings3 = () => {
  const keys = [
    ...new Set(flatDeep(recentEarnings.map((sale) => Object.keys(sale)))),
  ];

  return (
    <Card mb="10px">
      <StyledHeader>
        <div>
          <SectionTitle
            title="매입"
            desc="타이틀 및 서브 타이틀을 정해주세요."
          />
        </div>
      </StyledHeader>
      <CardBody py={["30px", "30px"]}>
        <StyledMediaWrap>
          <Media>
            <StyledMedaLeft bg="teal">
              <BarChart2 size="24" />
            </StyledMedaLeft>
            <MediaBody>
              <StyledMediaTitle>1위</StyledMediaTitle>
              <StyledMediaSub>68.4%</StyledMediaSub>
            </MediaBody>
          </Media>
          <Media mt={["20px", "0px"]} ml={[null, "15px", "40px"]}>
            <StyledMedaLeft bg="pink">
              <BarChart2 size="24" />
            </StyledMedaLeft>
            <MediaBody>
              <StyledMediaTitle>2위</StyledMediaTitle>
              <StyledMediaSub>12.4%</StyledMediaSub>
            </MediaBody>
          </Media>
          <Media mt={["20px", "0px"]} ml={[null, "15px", "40px"]}>
            <StyledMedaLeft bg="primary">
              <BarChart2 size="24" />
            </StyledMedaLeft>
            <MediaBody>
              <StyledMediaTitle>3위</StyledMediaTitle>
              <StyledMediaSub>8.4%</StyledMediaSub>
            </MediaBody>
          </Media>
          <Media mt={["20px", "0px"]} ml={[null, "15px", "40px"]}>
            <StyledMedaLeft bg="primary">
              <BarChart2 size="24" />
            </StyledMedaLeft>
            <MediaBody>
              <StyledMediaTitle>4위</StyledMediaTitle>
              <StyledMediaSub>8.4%</StyledMediaSub>
            </MediaBody>
          </Media>
        </StyledMediaWrap>
      </CardBody>
      <StyledTable>
        <thead>
          <tr>
            {/* {keys.map((key) => (
                            <StyledTH key={key}>
                                {key.replace(/_/g, " ")}
                            </StyledTH>
                        ))} */}
            <StyledTH>매출 종류</StyledTH>
            <StyledTH>퍼센트</StyledTH>
            <StyledTH>금액</StyledTH>
            <StyledTH>매입/매출</StyledTH>
          </tr>
        </thead>
        <tbody>
          <tr>
            <StyledTD color="text3">세금계산서</StyledTD>
            <StyledTD fontWeight="500">25%</StyledTD>
            <StyledTD color="teal">383,320,000,000</StyledTD>
            <StyledTD color="pink">매출</StyledTD>
          </tr>
          <tr>
            <StyledTD color="text3">온라인</StyledTD>
            <StyledTD fontWeight="500">25%</StyledTD>
            <StyledTD color="teal">383,320,000,000</StyledTD>
            <StyledTD color="pink">매출</StyledTD>
          </tr>
          <tr>
            <StyledTD color="text3">카드</StyledTD>
            <StyledTD fontWeight="500">25%</StyledTD>
            <StyledTD color="teal">383,320,000,000</StyledTD>
            <StyledTD color="pink">매출</StyledTD>
          </tr>
          <tr>
            <StyledTD color="text3">계산서</StyledTD>
            <StyledTD fontWeight="500">25%</StyledTD>
            <StyledTD color="teal">383,320,000,000</StyledTD>
            <StyledTD color="pink">매출</StyledTD>
          </tr>
          <tr>
            <StyledTD color="text3">현금영수증</StyledTD>
            <StyledTD fontWeight="500">25%</StyledTD>
            <StyledTD color="teal">383,320,000,000</StyledTD>
            <StyledTD color="pink">매출</StyledTD>
          </tr>
          <tr>
            <StyledTD color="text3">제로페이</StyledTD>
            <StyledTD fontWeight="500">25%</StyledTD>
            <StyledTD color="teal">383,320,000,000</StyledTD>
            <StyledTD color="pink">매출</StyledTD>
          </tr>
          {/* {recentEarnings.map((ear) => (
                        <tr key={ear.date}>
                            <StyledTD color="text3">{ear.date}</StyledTD>
                            <StyledTD fontWeight="500">
                                {ear.sales_count}
                            </StyledTD>
                            <StyledTD color="teal">
                                + {ear.gross_earnings}
                            </StyledTD>
                            <StyledTD color="pink">
                                - {ear.tax_withheld}
                            </StyledTD>
                            <StyledTD fontWeight="500">
                                {ear.net_earinings.earning}{" "}
                                <StyledTDRate
                                    color={
                                        ear.net_earinings.status === "up"
                                            ? "success"
                                            : "danger"
                                    }
                                >
                                    {ear.net_earinings.status === "up" && (
                                        <i className="fa fa-arrow-up" />
                                    )}
                                    {ear.net_earinings.status === "down" && (
                                        <i className="fa fa-arrow-down" />
                                    )}{" "}
                                    {ear.net_earinings.growth}
                                </StyledTDRate>
                            </StyledTD>
                        </tr>
                    ))} */}
        </tbody>
      </StyledTable>
    </Card>
  );
};

export default RecentEarnings3;
