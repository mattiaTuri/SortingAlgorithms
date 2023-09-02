import { useContext, useEffect } from "react";
import { ArrayContext } from "../../../App";
import Container from "../../shared/Container";
import RangeSlider from "./RangeSlider";

import ArrayElements from "./ArrayElements";
import CustomButton from "../../shared/CustomButton";

function Toolbar() {
  const { arrayLength, setArrayLength, array, setArray, time, setTime } =
    useContext(ArrayContext);

  const onArrayLengthChange = () => {
    setArrayLength(
      (document.getElementById("quantity") as HTMLInputElement).value
    );
  };

  const createArray = () => {
    setArray(
      Array.from({ length: arrayLength }, () => Math.floor(Math.random() * 101))
    );
    document.querySelectorAll("#container span").forEach((elem: any) => {
      elem.style.backgroundColor = "#faa916";
    });
  };

  return (
    <div className="h-[200px]">
      <Container>
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-32 md:gap-20">
          <CustomButton
            functionClick={() => createArray()}
            title="RANDOM ARRAY"
          />
          <ArrayElements />
          <RangeSlider />
        </div>
      </Container>
    </div>
  );
}

export default Toolbar;
