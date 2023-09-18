import { useContext, useState } from "react";
import { ArrayContext } from "../../App";
import Container from "../shared/Container";
import CustomButton from "../shared/CustomButton";
import { bubbleSort } from "../../algorithms/bubbleSort";
import { insertionSort } from "../../algorithms/insertionSort";
import { Box, IconButton, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import CustomModal from "../shared/CustomModal";
import { selectionSort } from "../../algorithms/selectionSort";
import { countingSort } from "../../algorithms/countingSort";

function Navbar() {
  const { array, time } = useContext<any>(ArrayContext);
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <header className="md:h-[100px] bg-[#262626]">
      <Container>
        <nav className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-10">
          <Box className="flex items-center">
            <Typography component="h1" className="text-white">
              SORTING ALGORITHMS
            </Typography>
            <IconButton>
              <InfoIcon
                className="text-[#faa916]"
                onClick={() => setOpenModal(true)}
              />
            </IconButton>
            <CustomModal
              openModal={openModal}
              clickFunction={() => setOpenModal(false)}
            />
          </Box>
          <Box className="flex flex-wrap gap-4">
            <CustomButton
              functionClick={() => bubbleSort(0, time)}
              title="BUBBLE SORT"
              disabled={array == undefined ? true : false}
            />
            <CustomButton
              functionClick={() => insertionSort(time)}
              title="INSERTION SORT"
              disabled={array == undefined ? true : false}
            />
            <CustomButton
              functionClick={() => selectionSort(time)}
              title="SELECTION SORT"
              disabled={array == undefined ? true : false}
            />
            <CustomButton
              functionClick={() => console.log("Merge sort")}
              title="MERGE SORT"
              disabled={true}
            />
            <CustomButton
              functionClick={() => console.log("Quicksort")}
              title="QUICKSORT"
              disabled={true}
            />
            <CustomButton
              functionClick={() => countingSort(time)}
              title="COUNTING SORT"
              disabled={true}
            />
          </Box>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
