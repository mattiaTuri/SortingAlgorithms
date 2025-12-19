import { Outlet } from "react-router-dom";
import Navbar from "./components/core/navbar";
import { createContext, useEffect, useRef, useState } from "react";
import Toolbar from "./components/core/toolbar/Toolbar";
import GUI from "lil-gui";

export const ArrayContext = createContext<any>([]);

function App() {
  const [array, setArray] = useState<number[]>();
  const [arrayLength, setArrayLength] = useState<number>(10);
  const [speed, setSpeed] = useState<number>(1000);
  const properties = { array, setArray, arrayLength, setArrayLength, speed, setSpeed };
  const toolbarRef = useRef({ arrayLength: 1, speed: 1000, createArray: () => createArray() });

  useEffect(() => {
    const gui = new GUI();
    gui.title("Toolbar");
    gui
      .add(toolbarRef.current, "arrayLength")
      .step(1)
      .min(3)
      .max(12)
      .onChange((length: number) => setArrayLength(length));
    gui
      .add(toolbarRef.current, "speed")
      .step(100)
      .min(100)
      .max(2000)
      .onChange((speed: number) => setSpeed(speed));
    gui.add(toolbarRef.current, "createArray");
    return () => {
      gui.destroy();
    };
  }, []);

  const createArray = () => {
    document.querySelectorAll("#container span").forEach((elem: any) => {
      elem.style.transitionDuration = "0ms";
      elem.style.transform = "translate(0px, 0px)";
    });
    setArray(Array.from({ length: arrayLength }, () => Math.floor(Math.random() * 11)));
    document.querySelectorAll("#container span").forEach((elem: any) => {
      elem.style.backgroundColor = "#faa916";
    });
  };

  return (
    <ArrayContext.Provider value={properties}>
      <div className="md:h-screen flex flex-col gap-20 md:justify-between">
        <Navbar />
        <Outlet />
        {/* <Toolbar /> */}
      </div>
    </ArrayContext.Provider>
  );
}

export default App;
