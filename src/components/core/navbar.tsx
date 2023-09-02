import { useContext } from "react";
import { ArrayContext } from "../../App";
import Container from "../shared/Container";
import CustomButton from "../shared/CustomButton";
import { bubbleSort } from "./bubbleSortFunction";

function Navbar() {
  const { arrayLenght, setArray, time } = useContext<any>(ArrayContext);

  const createArray = () => {
    setArray(
      Array.from({ length: arrayLenght }, () => Math.floor(Math.random() * 101))
    );
    document.querySelectorAll("#container span").forEach((elem: any) => {
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
