import { Outlet } from "react-router-dom";
import Navbar from "./components/core/navbar";
import { createContext, useState } from "react";
import Toolbar from "./components/core/toolbar/Toolbar";

export const ArrayContext = createContext<any>([]);

function App() {
  const [array, setArray] = useState<number[]>();
  const [arrayLength, setArrayLength] = useState<number>(5);
  const [time, setTime] = useState<number>(2500);
  const value = { array, setArray, arrayLength, setArrayLength, time, setTime };

  return (
    <ArrayContext.Provider value={value}>
      <div className="h-screen flex flex-col justify-between">
        <Navbar />
        <Outlet />
        <Toolbar />
      </div>
    </ArrayContext.Provider>
  );
}

export default App;
