import {
  StyledFooter,
  StyledFooterLeft,
  StyledFooterNav,
  StyledFooterRight,
  StyledFotterNavLink,
} from "./style";

import { Heart } from "react-feather";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterRight>
        <span className="copright-link" style={{ marginRight: "10px" }}>
          <a
            href="http://www.clust.kr/pc/sub3.jsp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Business
          </a>
        </span>
        <span className="copright-link" style={{ marginRight: "10px" }}>
          <a
            href="http://www.clust.kr/pc/sub4_1.jsp"
            target="_blank"
            rel="noopener noreferrer"
          >
            News
          </a>
        </span>
        <span className="copright-link">
          <a
            href="http://www.clust.kr/pc/sub5.jsp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Help
          </a>
        </span>
      </StyledFooterRight>
      <StyledFooterLeft>
        <span className="copright-link">
          <a
            href="http://www.clust.kr/pc/index.jsp"
            target="_blank"
            rel="noopener noreferrer"
          >
            CLUST PARTNERS 홈페이지
          </a>
        </span>
      </StyledFooterLeft>
    </StyledFooter>
  );
};

export default Footer;
