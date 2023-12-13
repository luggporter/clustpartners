import {
    Button,
    Modal,
    ModalBody,
    ModalClose,
    ModalFooter,
    ModalHeader,
    ModalTitle,
} from "@doar/components";

import { X } from "react-feather";

interface IProps {
    show: boolean;
    onClose: () => void;
}

const ModalPrint = ({ show, onClose }: IProps) => {
    return (
        <Modal show={show} onClose={onClose}>
            <ModalHeader>
                <ModalTitle>프린트 인쇄</ModalTitle>
                <ModalClose onClose={onClose}>
                    <X />
                </ModalClose>
            </ModalHeader>
            <ModalBody>
                <p>페이지1보고서(미정이름)의 화면을 인쇄하시겠습니까?</p>
            </ModalBody>
            <ModalFooter>
                <Button>인쇄</Button>
                <Button color="secondary" onClick={onClose}>
                    취소
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default ModalPrint;
