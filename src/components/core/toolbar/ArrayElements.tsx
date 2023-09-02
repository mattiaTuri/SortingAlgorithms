import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { IconButton, TextField, Tooltip, Typography } from "@mui/material";
import { EventHandler, useContext } from "react";
import { ArrayContext } from "../../../App";
import InfoIcon from "@mui/icons-material/Info";

function ArrayElements() {
  const { arrayLength, setArrayLength, time, setTime } =
    useContext(ArrayContext);

  const increase = () => {
    if (arrayLength != 20) {
      setArrayLength(arrayLength + 1);
    }
  };

  const decrease = () => {
    if (arrayLength != 3) {
      setArrayLength(arrayLength - 1);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <Tooltip title="Element from 3-20">
        <IconButton>
          <InfoIcon className="text-[#faa916]" />
        </IconButton>
      </Tooltip>
      <span className="text-white">Element of array</span>
      <div className="flex gap-4">
        <IconButton onClick={() => decrease()}>
          <RemoveIcon className="text-[#faa916]" />
        </IconButton>
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={arrayLength}
          InputProps={{ inputProps: { min: 3, max: 20 } }}
          sx={{
            width: "100px",
            ".MuiInputBase-root": {
              color: "white",
              border: "2px solid #faa916",
            },
          }}
        />
        <IconButton onClick={() => increase()}>
          <AddIcon className="text-[#faa916]" />
        </IconButton>
      </div>
    </div>
  );
}

export default ArrayElements;
