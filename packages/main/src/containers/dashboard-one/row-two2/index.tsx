import AccountRetention from "../../../components/dashboard-one/account-retention";
import { Col } from "@doar/components";
import RealTimeSales from "../../../components/dashboard-one/real-time-sales";
import RevenueGrowth from "../../../components/dashboard-one/revenue-growth";

const RowTwo2 = () => {
    return (
        <>
            <Col lg={12} xl={12} mt="10px">
                <RealTimeSales />
            </Col>
        </>
    );
};

export default RowTwo2;
