import Slider from "@mui/material/Slider";
import { useContext } from "react";
import { ArrayContext } from "../../../App";

function RangeSlider() {
  const { arrayLenght, setArrayLenght, time, setTime } =
    useContext(ArrayContext);

  const onTimeChange = () => {
    setTime(
      (document.getElementById("slider-range") as HTMLInputElement).value
    );
  };

  return (
    <Slider
      key={`slider-${time}`}
      id="slider-range"
      aria-label="Always visible"
      defaultValue={time}
      //getAriaValueText={valuetext}
      min={200}
      max={5000}
      valueLabelDisplay="on"
      sx={{ width: "200px" }}
      onChange={() => onTimeChange()}
    />
  );
}

export default RangeSlider;
