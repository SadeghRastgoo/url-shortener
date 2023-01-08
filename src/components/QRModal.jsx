import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

const QRModal = ({ toggleQRModal, url }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [qrSvg, setQRSvg] = useState("");
  const ref = useRef();

  const generateNewQRCode = () => {
    // const options = {
    //   method: "POST",
    //   headers: {
    //     Accept: "image/svg+xml",
    //     "Content-Type": "application/json",
    //     "X-RapidAPI-Key": "870264879bmsh3c991bd066d9784p186777jsne991917c9c2c",
    //     "X-RapidAPI-Host": "qrcode3.p.rapidapi.com",
    //   },
    //   body: JSON.stringify({
    //     data: "https://linqr.app",
    //     image: { uri: "icon://appstore", modules: true },
    //     style: {
    //       module: { color: "black", shape: "default" },
    //       inner_eye: { shape: "default" },
    //       outer_eye: { shape: "default" },
    //     },
    //     size: { width: 200, quiet_zone: 4, error_correction: "M" },
    //     output: { filename: "qrcode", format: "svg" },
    //   }),
    // };
    // fetch("https://qrcode3.p.rapidapi.com/qrcode/text", options)
    //   .then((response) => response.text())
    //   .then((response) => setQRSvg(response))
    //   .catch((err) => console.error(err));
  };

  useEffect(() => {
    onOpen();
    generateNewQRCode();
  }, []);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          toggleQRModal("", false);
          onClose();
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal sitle</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div ref={ref}></div>
          </ModalBody>

          <ModalFooter>sss</ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default QRModal;
