import {
  ApexLineChart,
  Card,
  ListGroup,
  ListGroupItem,
  SectionTitle,
} from "@doar/components";
import {
  StyledFooter,
  StyledFooterLink,
  StyledHeader,
  StyledHeaderRight,
  StyledIcon,
} from "./style";

import Item from "./item";
import { customers } from "@doar/shared/data/dashboard-one";
import { ticketChart2 } from "@doar/shared/data/dashboard-four";

const Customers = () => {
  return (
    <Card height="100%">
      <StyledHeader>
        <SectionTitle title="부가율" />
      </StyledHeader>
      <ApexLineChart
        options={ticketChart2.options}
        series={ticketChart2.series}
        height="350px"
        width="100%"
      />
    </Card>
  );
};

export default Customers;
