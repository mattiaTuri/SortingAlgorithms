import { useContext } from "react";
import { ArrayContext } from "../App";
import Container from "../components/shared/Container";
import { Typography } from "@mui/material";

function SortingElement() {
  const { array } = useContext<any>(ArrayContext);
  return (
    <Container>
      <div className="w-full flex flex-col justify-center gap-20">
        <div
          id="container"
          className="flex lg:flex-nowrap justify-center items-center w-full gap-4"
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
                <span
                  key={index}
                  id={elem.toString()}
                  className="w-[30px] h-[30px] md:h-[50px] md:w-[50px]  lg:h-[80px] lg:w-[80px] bg-[#faa916] border-2 border-[#262626] border-solid rounded-[4px] flex justify-center items-center duration-300 relative text-sm lg:text-3xl"
                >
                  {elem}
                </span>
              );
            })
          )}
        </div>
        <div
          id="counting"
          className="hidden justify-center items-center w-full gap-4"
        ></div>
      </div>
    </Container>
  );
}

export default SortingElement;
