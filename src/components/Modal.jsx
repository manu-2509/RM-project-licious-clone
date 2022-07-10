import {useDisclosure,Button,ModalContent,ModalFooter,Modal,ModalOverlay,ModalCloseButton,ModalBody} from "@chakra-ui/react"
import {useState} from "react"
export const BackdropExample=({route})=>{
    const OverlayOne = () => (
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = useState(<OverlayOne />)
    console.log(route)
    return (
      <>
      {route=="chicken"?
        <Button
          onClick={() => {
            setOverlay(<OverlayOne />)
            onOpen()
          }}
        >
            <img src="https://www.licious.in/img/rebranding/play_icon.svg" alt="" />
           Only the Safest Chicken!
        </Button>:route=="fish"?
        <Button
        onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}
        >
            <img src="https://www.licious.in/img/rebranding/play_icon.svg" alt="" />
           Only the Safest Fish & Seafoods!
        </Button>:<Button  onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}>
          <img src="https://www.licious.in/img/rebranding/play_icon.svg" alt="" />
           Only the Safest Mutton!
          </Button>}
        <Modal isCentered isOpen={isOpen} onClose={onClose} size={"3xl"}>
          {overlay}
          <ModalContent>
            <ModalCloseButton />
           {route=="chicken" ? <ModalBody>
               <iframe margintop="20" width="730" height="430" src="https://www.youtube.com/embed/qtLF2_Th0u8" title="Licious Health & Safety Protocols - Chicken" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowFullScreen ></iframe>
            </ModalBody>:route=="fish"? <ModalBody>
               <iframe margintop="20" width="730" height="430" src="https://www.youtube.com/embed/brQI-S2wLiE" title="Licious Health & Safety Protocols - Fish & Seafoods" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowFullScreen ></iframe>
            </ModalBody>: <ModalBody>
               <iframe margintop="20" width="730" height="430" src="https://www.youtube.com/embed/l7RiA6cMqx4" title="Licious Health & Safety Protocols - Mutton" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowFullScreen ></iframe>
            </ModalBody>}
            <ModalFooter>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }