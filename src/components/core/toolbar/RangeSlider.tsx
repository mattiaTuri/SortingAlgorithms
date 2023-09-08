import Slider from "@mui/material/Slider";
import { useContext } from "react";
import { ArrayContext } from "../../../App";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function RangeSlider() {
  const { time, setTime } = useContext(ArrayContext);

  const onTimeChange = (e: any) => {
    setTime(e.target.value);
  };

  return (
    <Box className="flex flex-col md:flex-row items-center gap-4">
      <Typography component="span" sx={{fontSize: 15, color:"white"}}>Speed</Typography>
      <Slider
        id="slider-range"
        className="md:top-3"
        aria-label="Always visible"
        defaultValue={1000}
        value={time}
        min={200}
        max={2000}
        marks={[
          { value: 200, label: 200 },
          { value: 2000, label: 2000 },
        ]}
        valueLabelDisplay="on"
        valueLabelFormat={() => {
          return (
            <div className="hidden md:flex flex-col items-center gap-3 bg-transparent">
              <div className="border-2 border-[#faa916] h-[50px] w-[50px] rounded-full flex justify-center items-center">
                <Typography component="span" sx={{fontSize: 15, color:"white"}}>{time}</Typography>
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
          ".MuiSlider-markLabel": {
            color: "white",
          },
        }}
        onChange={(e) => onTimeChange(e)}
      />
    </Box>
  );
}

export default RangeSlider;
