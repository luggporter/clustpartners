import { Card, CardBody, SectionTitle, VectorMap } from "@doar/components";
import {
  StyeldMap,
  StyledHeader,
  StyledHeaderRight,
  StyledHeaderRightIcon,
  StyledHeaderRightText,
  StyledTD,
  StyledTH,
  StyledTable,
} from "./style";

import SessoionsChannel2 from "../../../components/dashboard-two/sessions-channel2";
import { flatDeep } from "@doar/shared/methods";
import { salesRevenues } from "@doar/shared/data/dashboard-one";
import usajson from "@doar/shared/data/maps/usa.json";

const SalesRevenue3 = () => {
  const keys = [
    ...new Set(flatDeep(salesRevenues.map((sale) => Object.keys(sale)))),
  ];
  return (
    <Card height={[null, null, null, "100%"]} minHeight={"calc(100% - 100px);"}>
      <StyledHeader>
        <SectionTitle title="매출 퍼센트" />
      </StyledHeader>
      <SessoionsChannel2 />
    </Card>
  );
};

export default SalesRevenue3;
