import { useContext } from "react";
import { ArrayContext } from "../../App";
import Container from "../shared/Container";
import CustomButton from "../shared/CustomButton";
import { bubbleSort } from "./bubbleSort";
import { insertionSort } from "./insertionSort";

function Navbar() {
  const { array, arrayLength, setArray, time } = useContext<any>(ArrayContext);

  return (
    <div className="md:h-[100px] bg-[#262626]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
          <h1 className="text-white">SORTING ALGORITHMS</h1>
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
              functionClick={() => console.log("Selection sort")}
              title="SELECTION SORT"
              disabled={true}
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
