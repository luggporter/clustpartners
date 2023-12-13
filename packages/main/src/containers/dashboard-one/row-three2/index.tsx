import { Col, Row } from "@doar/components";

import CSVDownload3 from "../../../components/dashboard-one/csv-download3";
import RecentEarnings3 from "../../../components/dashboard-one/recent-earnings3";
import SalesRevenue from "../../../components/dashboard-one/sales-revenue2";
import SalesRevenue3 from "../../../components/dashboard-one/sales-revenue3";

const RowThree = () => {
    return (
        <>
            <Col xl={4} md={6} mt="10px" mdOrder={1} xlOrder={0}>
                <Row>
                    <Col>
                        <SalesRevenue3 />
                    </Col>
                    <Col>
                        <CSVDownload3 />
                    </Col>
                </Row>
            </Col>
            <Col xl={8} lg={12} mt="10px">
                <RecentEarnings3 />
            </Col>
        </>
    );
};

export default RowThree;
