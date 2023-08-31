import { Outlet } from "react-router-dom";
import Navbar from "./components/core/navbar";
import { createContext, useState } from "react";

export const ArrayContext = createContext<any>([]);

function App() {
  const [array, setArray] = useState<number[]>();
  const value = { array, setArray };

  return (
    <ArrayContext.Provider value={value}>
      <div className="h-screen flex flex-col">
        <Navbar />
        <Outlet />
      </div>
    </ArrayContext.Provider>
  );
}

export default App;
