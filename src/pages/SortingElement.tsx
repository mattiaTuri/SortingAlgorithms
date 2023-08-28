import { useContext } from "react";
import { ArrayContext } from "../App";

function SortingElement(){
    const {array, setArray} = useContext<any>(ArrayContext);
    return (
        <div style={{display:"flex", justifyContent:"center"}}>
            <div style={{display:"flex", width:"50%", justifyContent:"space-evenly"}}>
                {array != undefined && array.map((elem:number) => {
                    return (
                        <span style={{backgroundColor: "blue", height: `${elem}px`}}>{elem}</span>
                    )
                })}
            </div>
        </div>

    )
}

export default SortingElement