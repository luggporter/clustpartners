import Content from "../layouts/content";
import { Row } from "@doar/components";
import RowFour from "../containers/dashboard-one/row-four";
import RowOne from "../containers/dashboard-one/row-one";
import RowThree from "../containers/dashboard-one/row-three";
import RowThree2 from "../containers/dashboard-one/row-three2";
import RowTwo2 from "../containers/dashboard-one/row-two2";
import SEO from "../components/seo";
import WebsiteMetrics from "../components/dashboard-two/website-metrics2";
import WelcomeArea from "../containers/dashboard-one/welcome-area";

const DashboardOne = () => {
    return (
        <>
            <SEO />
            <Content>
                <WelcomeArea />
                <Row gutters={10}>
                    <RowOne />
                    <WebsiteMetrics />

                    <RowThree />
                    <RowThree2 />
                    <RowFour />
                    <RowTwo2 />
                </Row>
            </Content>
        </>
    );
};

export default DashboardOne;
