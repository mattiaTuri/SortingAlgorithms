import Slider from "@mui/material/Slider";
import { useContext } from "react";
import { ArrayContext } from "../../../App";

function RangeSlider() {
  const { time, setTime } = useContext(ArrayContext);

  const onTimeChange = (e: any) => {
    setTime(e.target.value);
  };

  return (
    <div className="flex items-center gap-4">
      <span className="text-white">Speed</span>
      <Slider
        key={`slider-${time}`}
        id="slider-range"
        aria-label="Always visible"
        defaultValue={time}
        min={200}
        max={5000}
        valueLabelDisplay="on"
        valueLabelFormat={() => {
          return (
            <div className="flex flex-col items-center gap-3 bottom-[40px] bg-transparent">
              <div className="border-2 border-[#faa916] h-[50px] w-[50px] rounded-full flex justify-center items-center">
                <span className="text-white">{time}</span>
              </div>
              <div className="clip-triangle w-5 h-5 bg-[#faa916] rounded-xl"></div>
            </div>
          );
        }}
        sx={{
          width: "200px",
          color: "#faa916",
          ".MuiSlider-valueLabelOpen": {
            backgroundColor: "transparent",
          },
        }}
        onChange={(e) => onTimeChange(e)}
      />
    </div>
  );
}

export default RangeSlider;
