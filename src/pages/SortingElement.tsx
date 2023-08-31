import { useContext } from "react";
import { ArrayContext } from "../App";
import Container from "../components/shared/Container";

function SortingElement() {
  const { array, setArray } = useContext<any>(ArrayContext);
  return (
    <Container>
      <div className="flex justify-center items-center w-full gap-4">
        {array != undefined &&
          array.map((elem: number) => {
            return (
              <span className="w-[50px] h-[50px] bg-[#faa916] border-2 border-[#262626] border-solid flex justify-center items-center">
                {elem}
              </span>
            );
          })}
      </div>
    </Container>
  );
}

export default SortingElement;
