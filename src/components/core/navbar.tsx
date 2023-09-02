import { useContext } from "react";
import { ArrayContext } from "../../App";
import Container from "../shared/Container";
import CustomButton from "../shared/CustomButton";
import { bubbleSort } from "./bubbleSortFunction";

function Navbar() {
  const { arrayLength, setArray, time } = useContext<any>(ArrayContext);

  return (
    <div className="h-[100px] bg-[#262626]">
      <Container>
        <div className="flex items-center gap-10">
          <h1 className="text-white">SORTING ALGORITHMS</h1>
          <div className="flex gap-10">
            <CustomButton
              functionClick={() => bubbleSort(0, time)}
              title="BUBBLE SORT"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
