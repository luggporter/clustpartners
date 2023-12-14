import { Col, Row } from "@doar/components";

import CSVDownload from "../../../components/dashboard-one/csv-download2";
import RecentEarnings from "../../../components/dashboard-one/recent-earnings2";
import SalesRevenue from "../../../components/dashboard-one/sales-revenue2";

const RowThree2 = () => {
  return (
    <>
      <Col xl={4} md={6} mt="10px" mdOrder={1} xlOrder={0}>
        <Row>
          <Col>
            <SalesRevenue />
          </Col>
          <Col>
            <CSVDownload />
          </Col>
        </Row>
      </Col>
      <Col xl={8} lg={12} mt="10px">
        <RecentEarnings />
      </Col>
    </>
  );
};

export default RowThree2;
