import { Col } from "@doar/components";
import Conversion from "../../../components/dashboard-one/conversion";
import { conversions } from "@doar/shared/data/dashboard-one";

const RowOne = () => {
  return (
    <>
      {conversions.map((data) => (
        <Col
          sm={6}
          lg={3}
          mt={["10px", null, null, "0px"]}
          mb={"10px"}
          key={data.id}
        >
          <Conversion
            title={data.title}
            rate={data.rate}
            change={data.change}
            chart={data.chart}
          />
        </Col>
      ))}
    </>
  );
};

export default RowOne;
