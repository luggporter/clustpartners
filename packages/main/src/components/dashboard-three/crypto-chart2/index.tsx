import {
    ApexAreaChart,
    Card,
    CardBody,
    CardFooter,
    Col,
    DropdownMenu,
    DropdownToggle,
    Row,
} from "@doar/components";
import {
    StyledChart,
    StyledDropdown,
    StyledFooterSub,
    StyledFooterTitle,
    StyledHeader,
    StyledHeaderRight,
    StyledText,
} from "./style";

import NavLine from "./nav-line";
import { cryptoChart } from "@doar/shared/data/dashboard-three";

const CryptoChart = () => {
    return (
        <Card>
            <CardBody p={["10px", "20px"]}>
                <StyledChart>
                    <ApexAreaChart
                        options={cryptoChart.options}
                        series={cryptoChart.series}
                        width="100%"
                        height="100%"
                    />
                </StyledChart>
            </CardBody>
            <CardFooter p="20px">
                <Row gutters={20}>
                    <Col col={6} sm={4} md>
                        <StyledFooterTitle>Market Cap</StyledFooterTitle>
                        <StyledFooterSub>$14.5B</StyledFooterSub>
                    </Col>
                    <Col col={6} sm={4} md>
                        <StyledFooterTitle>Volume (24h)</StyledFooterTitle>
                        <StyledFooterSub>$4.6B</StyledFooterSub>
                    </Col>
                    <Col col={6} sm={4} md mt={["20px", 0]}>
                        <StyledFooterTitle>Change</StyledFooterTitle>
                        <StyledFooterSub>
                            -$7.98 <i className="danger fa fa-arrow-down" />
                        </StyledFooterSub>
                    </Col>
                    <Col col={6} sm={4} md mt={["20px", null, 0]}>
                        <StyledFooterTitle>
                            Circulating Supply
                        </StyledFooterTitle>
                        <StyledFooterSub>17.59M</StyledFooterSub>
                    </Col>
                    <Col col={6} sm={4} md mt={["20px", null, 0]}>
                        <StyledFooterTitle>All Time High</StyledFooterTitle>
                        <StyledFooterSub>$18.4K</StyledFooterSub>
                    </Col>
                </Row>
            </CardFooter>
        </Card>
    );
};

export default CryptoChart;
