import { Helmet } from "react-helmet";

interface IProps {
  title?: string;
  titleTemplate?: string;
  description?: string;
}

const SEO = ({ title, titleTemplate, description }: IProps) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        {title} - {titleTemplate}
      </title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

SEO.defaultProps = {
  title: "Doar",
  titleTemplate: "Responsive React Admin Template",
  description: "Responsive React Admin Template",
};

export default SEO;
