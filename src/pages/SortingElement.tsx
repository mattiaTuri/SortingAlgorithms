import { useContext } from "react";
import { ArrayContext } from "../App";
import Container from "../components/shared/Container";
import { Typography } from "@mui/material";

function SortingElement() {
  const { array, setArray } = useContext<any>(ArrayContext);
  return (
    <Container>
      <div className="w-full flex flex-col justify-center gap-20">
        <div
          id="container"
          className="flex flex-wrap lg:flex-nowrap justify-center items-center w-full gap-4"
        >
          {array == undefined ? (
            <div className="text-center">
              <Typography
                sx={{ fontSize: 30 }}
                className="text-white"
                component="span"
              >
                Create your array
              </Typography>
            </div>
          ) : (
            array.map((elem: number, index: number) => {
              return (
                <Typography
                  component="span"
                  key={index}
                  id={elem.toString()}
                  className="w-[80px] h-[80px] bg-[#faa916] border-2 border-[#262626] border-solid rounded-[4px] flex justify-center items-center duration-300 relative"
                  sx={{ fontSize: 30 }}
                >
                  {elem}
                </Typography>
              );
            })
          )}
        </div>
        <div id="counting" className="flex flex-wrap lg:flex-nowrap justify-center items-center w-full gap-4"></div>
        <div id="incrementCounter" className="flex flex-wrap lg:flex-nowrap justify-center items-center w-full gap-4"></div>
      </div>
    </Container>
  );
}

export default SortingElement;
