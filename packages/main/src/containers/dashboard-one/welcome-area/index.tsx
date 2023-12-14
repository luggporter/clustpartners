import { File, Mail, Printer } from "react-feather";
import {
  StyledButton,
  StyledWelcomeArea,
  StyledWelcomeLeft,
  StyledWelcomeRight,
} from "./style";

import Breadcrumb from "../../../components/breadcrumb";
import ModalPrint from "../../../components/dashboard-one/modal-print";
import ModalReport from "../../../components/dashboard-one/modal-report";
import { useState } from "react";

const WelcomeArea = () => {
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const handlePrintModal = () => {
    setShowPrintModal((prev) => !prev);
  };
  const handleReportModal = () => {
    setShowReportModal((prev) => !prev);
  };
  return (
    <>
      <StyledWelcomeArea>
        <StyledWelcomeLeft>
          <Breadcrumb
            prev={[{ text: "Dashboard 1", link: "/" }]}
            title="XX 분석"
            wcText="A거래처 XX 대시보드"
          />
        </StyledWelcomeLeft>
        <StyledWelcomeRight>
          <StyledButton
            size="sm"
            color="white"
            hasIcon
            ml="10px"
            onClick={handlePrintModal}
          >
            <Printer />
            화면 인쇄
          </StyledButton>
        </StyledWelcomeRight>
      </StyledWelcomeArea>
      <ModalPrint show={showPrintModal} onClose={handlePrintModal} />
      <ModalReport show={showReportModal} onClose={handleReportModal} />
    </>
  );
};

export default WelcomeArea;
