import { Button, Input } from "@doar/components";
import {
  StyledDesc,
  StyledImg,
  StyledNote,
  StyledResetForm,
  StyledSubTitle,
  StyledTitle,
  StyledWrap,
} from "./style";

import image from "@doar/shared/images/img19.png";

const ErrorContainer = () => {
  return (
    <StyledWrap>
      <StyledImg>
        <img src={image} alt="404" />
      </StyledImg>
      <StyledTitle>URL 주소를 확인해주세요.</StyledTitle>
      <StyledSubTitle>
        확인 할 수 없는 URL 주소 입니다. URL 주소를 확인해주세요.
      </StyledSubTitle>
    </StyledWrap>
  );
};

export default ErrorContainer;
