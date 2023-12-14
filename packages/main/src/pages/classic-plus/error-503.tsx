import Content from "../../layouts/layout-02/content";
import ContentHeader from "../../layouts/layout-02/content-header";
import ContentBody from "../../layouts/layout-02/content-body";
import ErrorContainer from "../../containers/error-503";
import SEO from "../../components/seo";

const Error505 = () => {
  return (
    <>
      <SEO />
      <Content fullHeight align="center">
        <ContentHeader />
        <ContentBody>
          <ErrorContainer />
        </ContentBody>
      </Content>
    </>
  );
};

export default Error505;
