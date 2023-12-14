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
import { StyledChart } from "../../../components/dashboard-two/website-metrics2/style";
import { ticketChart2 } from "@doar/shared/data/dashboard-four";
import { transaction } from "@doar/shared/data/dashboard-one";

const Transaction = () => {
  return (
    <Card height="100%">
      <StyledHeader>
        <SectionTitle title="손익" />
      </StyledHeader>
      {/* <StyledChart> */}
      <ApexLineChart
        options={ticketChart2.options}
        series={ticketChart2.series}
        height="350px"
        width="100%"
      />
      {/* </StyledChart> */}
      {/* <StyledFooter>
                <StyledFooterLink href="/invoice">
                    View All Transactions{" "}
                    <i className="icon ion-md-arrow-down mg-l-5" />
                </StyledFooterLink>
            </StyledFooter> */}
    </Card>
  );
};

export default Transaction;
