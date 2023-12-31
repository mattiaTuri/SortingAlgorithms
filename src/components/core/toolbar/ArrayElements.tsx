import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Box, IconButton, TextField, Tooltip, Typography } from "@mui/material";
import { useContext } from "react";
import { ArrayContext } from "../../../App";
import InfoIcon from "@mui/icons-material/Info";

function ArrayElements() {
  const { arrayLength, setArrayLength } =
    useContext(ArrayContext);

  const increase = () => {
    if (arrayLength != 12) {
      setArrayLength(arrayLength + 1);
    }
  };

  const decrease = () => {
    if (arrayLength != 3) {
      setArrayLength(arrayLength - 1);
    }
  };

  return (
    <Box className="flex flex-col md:flex-row md:items-center gap-4">
      <Box className="text-center">
        <Tooltip title="Element from 3-20">
          <IconButton>
            <InfoIcon className="text-[#faa916]" />
          </IconButton>
        </Tooltip>
        <Typography component="span" sx={{fontSize: 15, color:"white"}}>Element of array</Typography>
      </Box>
      <Box className="flex justify-center items-center">
        <IconButton onClick={() => decrease()}>
          <RemoveIcon className="text-[#faa916]" />
        </IconButton>
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={arrayLength}
          InputProps={{ inputProps: { min: 3, max: 12 } }}
          sx={{
            width: "60px",
            ".MuiInputBase-root": {
              color: "white",
              border: "2px solid #faa916",
            },
          }}
        />
        <IconButton onClick={() => increase()}>
          <AddIcon className="text-[#faa916]" />
        </IconButton>
      </Box>
    </Box>
  );
}

export default ArrayElements;
