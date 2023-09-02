import { useContext, useEffect } from "react";
import { ArrayContext } from "../../../App";
import Container from "../../shared/Container";
import RangeSlider from "./RangeSlider";
import Slider from "@mui/material/Slider";

function Toolbar() {
  const { arrayLenght, setArrayLenght, time, setTime } =
    useContext(ArrayContext);

  const onArrayLenghtChange = () => {
    setArrayLenght(
      (document.getElementById("quantity") as HTMLInputElement).value
    );
  };

  const onTimeChange = (e: any) => {
    setTime(e.target.value);
  };

  return (
    <div className="h-[100px]">
      <Container>
        <div className="w-full flex justify-center gap-20">
          <div className="flex gap-4">
            <span className="text-white">Element of array</span>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={arrayLenght}
              onChange={() => onArrayLenghtChange()}
              min="3"
              max="20"
              className="w-20 h-max bg-transparent border border-[#faa916] text-white"
            />
          </div>
          <div className="flex items-start gap-4">
            <span className="text-white">Speed</span>
            <Slider
              key={`slider-${time}`}
              id="slider-range"
              aria-label="Always visible"
              defaultValue={time}
              min={200}
              max={5000}
              valueLabelDisplay="on"
              sx={{
                width: "200px",
                thumb: {
                  color: "yellow",
                },
              }}
              onChange={(e) => onTimeChange(e)}
            />
            {/* <div className="relative">
              <div
                id="label-range"
                className="flex flex-col items-center gap-3 absolute bottom-[40px]"
              >
                <div className="border-2 border-[#faa916] h-[50px] w-[50px] rounded-full flex justify-center items-center">
                  <span className="text-white">{time}</span>
                </div>
                <div className="clip-triangle w-5 h-5 bg-[#faa916] rounded-xl"></div>
              </div>
              <input
                id="slider-range"
                className="w-[200px]"
                value={time}
                type="range"
                min="200"
                max="5000"
                onChange={() => onTimeChange()}
              />
            </div> */}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Toolbar;
