import { useContext } from "react";
import { ArrayContext } from "../App";
import Container from "../components/shared/Container";

function SortingElement() {
  const { array, setArray } = useContext<any>(ArrayContext);
  return (
    <Container>
      <div
        id="container"
        className="flex justify-center items-center w-full gap-10"
      >
        {array != undefined &&
          array.map((elem: number, index: number) => {
            return (
              <span
                key={index}
                id={elem.toString()}
                className="w-[100px] h-[100px] bg-[#faa916] border-2 border-[#262626] border-solid rounded-[4px] flex justify-center items-center duration-300 text-[30px] relative"
              >
                {elem}
              </span>
            );
          })}
      </div>
    </Container>
  );
}

export default SortingElement;
