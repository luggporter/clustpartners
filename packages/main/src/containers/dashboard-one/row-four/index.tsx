import { Col } from "@doar/components";
import Customers from "../../../components/dashboard-one/customers";
import RealTimeSales from "../../../components/dashboard-one/real-time-sales";
import Transaction from "../../../components/dashboard-one/transaction";

const RowFour = () => {
  return (
    <>
      <Col md={6} xl={6} mt="10px">
        <Transaction />
      </Col>
      <Col md={6} xl={6} mt="10px">
        <Customers />
      </Col>
      {/* <Col md={6} xl={4} mt="10px">
                <RealTimeSales />
            </Col> */}
    </>
  );
};

export default RowFour;
