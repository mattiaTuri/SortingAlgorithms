import { useContext, useEffect } from "react";
import { ArrayContext } from "../../../App";
import Container from "../../shared/Container";
import RangeSlider from "./RangeSlider";
import ArrayElements from "./ArrayElements";
import CustomButton from "../../shared/CustomButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Toolbar() {
  const { arrayLength, setArrayLength, array, setArray, time, setTime } =
    useContext(ArrayContext);

  const createArray = () => {
    setArray(
      Array.from({ length: arrayLength }, () => Math.floor(Math.random() * 101))
    );
    document.querySelectorAll("#container span").forEach((elem: any) => {
      elem.style.backgroundColor = "#faa916";
    });
  };

  return (
    <div className="md:h-[300px]">
      <Container>
        <Box className="w-full flex flex-col items-center gap-10 p-4 border-2 border-[#faa916] rounded-[4px]">
          <Box>
            <Typography component="span" sx={{fontSize: 30, color:"white"}}>Toolbar</Typography>
          </Box>
          <Box className="flex flex-col md:flex-row items-center gap-10 lg:gap-20">
            <CustomButton
              functionClick={() => createArray()}
              title="RANDOM ARRAY"
              disabled={false}
            />
            <ArrayElements />
            <RangeSlider />
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Toolbar;
