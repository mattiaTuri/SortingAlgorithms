import { Outlet } from "react-router-dom";
import Navbar from "./components/core/navbar";
import { createContext, useState } from "react";
import Toolbar from "./components/core/toolbar/Toolbar";

export const ArrayContext = createContext<any>([]);

function App() {
  const [array, setArray] = useState<number[]>();
  const [arrayLength, setArrayLength] = useState<number>(10);
  const [time, setTime] = useState<number>(1000);
  const value = { array, setArray, arrayLength, setArrayLength, time, setTime };

  return (
    <ArrayContext.Provider value={value}>
      <div className="md:h-screen flex flex-col gap-20 md:justify-between">
        <Navbar />
        <Outlet />
        <Toolbar />
      </div>
    </ArrayContext.Provider>
  );
}

export default App;
