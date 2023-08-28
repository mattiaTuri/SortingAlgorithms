import { useContext } from "react";
import { ArrayContext } from "../../App";

function Navbar(){

    const {array, setArray} = useContext<any>(ArrayContext);

    const createArray = () => {
        setArray(Array.from({length:20}, () => Math.floor(Math.random()*101)))
    }

    return (
        <div style={{height:"50px", backgroundColor:"white"}}>
            <button onClick={() => createArray()}>Random</button>
        </div>
    )
}

export default Navbar