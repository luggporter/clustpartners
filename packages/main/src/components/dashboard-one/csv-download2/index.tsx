import { Media, MediaBody } from "@doar/components";
import { StyledCard, StyledIcon, StyledText, StyledTitle } from "./style";

import { Download } from "react-feather";

const CSVDownload = () => {
  return (
    <StyledCard>
      <Media>
        <StyledIcon>
          <Download />
        </StyledIcon>
        <MediaBody ml="20px">
          <StyledTitle>매출 상세 저장</StyledTitle>
          <StyledText>
            매출 상세 내역을 엑셀로 변환하여, 다운로드 받으실 수 있습니다.
          </StyledText>
        </MediaBody>
      </Media>
    </StyledCard>
  );
};

export default CSVDownload;
