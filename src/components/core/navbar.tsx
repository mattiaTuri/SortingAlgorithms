import { useContext } from "react";
import { ArrayContext } from "../../App";
import Container from "../shared/Container";
import CustomButton from "../shared/CustomButton";
import { bubbleSort } from "./bubbleSortFunction";

function Navbar() {
  const { array, setArray } = useContext<any>(ArrayContext);

  const createArray = () => {
    setArray(Array.from({ length: 5 }, () => Math.floor(Math.random() * 101)));
    document.querySelectorAll("span").forEach((elem: HTMLSpanElement) => {
      elem.style.backgroundColor = "#faa916";
    });
  };

  return (
    <div className="h-[100px] bg-[#262626]">
      <Container>
        <div className="flex items-center gap-10">
          <h1 className="text-white">SORTING ALGORITHMS</h1>
          <div className="flex gap-10">
            <CustomButton
              functionClick={() => createArray()}
              title="RANDOM ARRAY"
            />
            <CustomButton
              functionClick={() => bubbleSort(0)}
              title="BUBBLE SORT"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
