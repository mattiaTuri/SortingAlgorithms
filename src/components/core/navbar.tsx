import { useContext, useState } from "react";
import { ArrayContext } from "../../App";
import Container from "../shared/Container";
import CustomButton from "../shared/CustomButton";
import { bubbleSort } from "../../algorithms/bubbleSort";
import { insertionSort } from "../../algorithms/insertionSort";
import { IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import CustomModal from "../shared/CustomModal";
import { selectionSort } from "../../algorithms/selectionSort";

function Navbar() {
  const { array, arrayLength, setArray, time } = useContext<any>(ArrayContext);
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div className="md:h-[100px] bg-[#262626]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
          <div className="flex items-center">
            <h1 className="text-white">SORTING ALGORITHMS</h1>
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
          </div>
          <div className="flex flex-wrap gap-4">
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
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
