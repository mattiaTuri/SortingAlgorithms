import { useContext } from "react";
import { ArrayContext } from "../../App";
import Container from "../shared/Container";
import CustomButton from "../shared/CustomButton";

function Navbar() {
  const { array, setArray } = useContext<any>(ArrayContext);

  const createArray = () => {
    setArray(Array.from({ length: 20 }, () => Math.floor(Math.random() * 101)));
  };

  return (
    <div className="h-[100px] bg-[#262626]">
      <Container>
        <div className="flex items-center gap-10">
          <h1 className="text-white">SORTING ALGORITHMS</h1>
          <div>
            <CustomButton
              functionClick={() => createArray()}
              title="RANDOM ARRAY"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
