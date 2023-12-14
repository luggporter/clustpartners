import Content from "../../layouts/layout-02/content";
import ContentBody from "../../layouts/layout-02/content-body";
import ContentHeader from "../../layouts/layout-02/content-header";
import { Row } from "@doar/components";
import RowFour from "../../containers/dashboard-one/row-four";
import RowOne from "../../containers/dashboard-one/row-one";
import RowThree from "../../containers/dashboard-one/row-three";
import RowTwo from "../../containers/dashboard-one/row-two";
import SEO from "../../components/seo";
import WelcomeArea from "../../containers/dashboard-one/welcome-area";

const DashboardOne = () => {
    return (
        <>
            <SEO />
            <Content>
                <ContentHeader />
                <ContentBody>
                    <WelcomeArea />
                    <Row gutters={10}>
                        <RowOne />
                        <RowTwo />
                        <RowThree />
                        <RowFour />
                    </Row>
                </ContentBody>
            </Content>
        </>
    );
};

export default DashboardOne;
