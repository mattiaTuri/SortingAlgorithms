import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import { algorithms } from "../../algorithms/algorithmsExplained"
import ModalParagraph from "./ModalParagraph";
import { Algorithm } from "../../Model/Algorithm";
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';

interface CustomModalProps{
    openModal:boolean;
    clickFunction: () => void
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'rgb(18, 18, 18)',
    border: '2px solid #faa916',
    borderRadius: "4px",
    boxShadow: 24,
    p: 4,
  };
  
function CustomModal({openModal, clickFunction}: CustomModalProps){
    return (
        <Modal
        open={openModal}
        onClose={clickFunction}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"    
        >
        <Box className="text-white h-[700px] w-[400px] md:w-[700px]" sx={style}>
            <Box className="flex justify-end">
            <IconButton onClick={clickFunction} sx={{border: "2px solid #faa916", "&:hover": {
                backgroundColor: "#faa916",
                color:"#262626",
                transitionDuration: 300
            }}} className="group">
                <CloseIcon className="text-white group-hover:text-[#262626] duration-300"/>
            </IconButton> 
            </Box>
        <Box className="overflow-auto h-full">
            {algorithms.map((elem: Algorithm) => {
                return (
                    <ModalParagraph key={elem.name} name={elem.name} description={elem.description}/>
                )
            })}
            </Box>
            
        </Box>
</Modal>
    )
}

export default CustomModal