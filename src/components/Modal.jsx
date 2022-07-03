import {useDisclosure,Button,ModalContent,ModalFooter,Modal,ModalOverlay,ModalCloseButton,ModalBody} from "@chakra-ui/react"
import {useState} from "react"
export const BackdropExample=()=>{
    const OverlayOne = () => (
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = useState(<OverlayOne />)
  
    return (
      <>
        <Button
          onClick={() => {
            setOverlay(<OverlayOne />)
            onOpen()
          }}
        >
            <img src="https://www.licious.in/img/rebranding/play_icon.svg" alt="" />
           Only the Safest Chicken!
        </Button>
        <Modal isCentered isOpen={isOpen} onClose={onClose} size={"3xl"}>
          {overlay}
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
               <iframe marginTop="20" width="730" height="430" src="https://www.youtube.com/embed/qtLF2_Th0u8" title="Licious Health & Safety Protocols - Chicken" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen ></iframe>
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }