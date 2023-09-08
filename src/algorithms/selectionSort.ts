import { delay, updateElemPos } from "./sharedFunctions";

export const selectionSort = async (time:number) => {
    let spanElemList: NodeListOf<HTMLSpanElement> =
    document.querySelectorAll("#container span");
    let posIndex = 1
    for(let i:number = 0; i < spanElemList.length; i++){
        let minNumber = spanElemList[i]
        minNumber.style.backgroundColor = "#EF476F"
        for(let j:number = posIndex; j < spanElemList.length; j++){
            let currentNumber = spanElemList[j]
            currentNumber.style.backgroundColor = "#FF3C38"
            await delay(time)
            if(parseInt(minNumber.id) > parseInt(currentNumber.id)){
                minNumber.style.backgroundColor = "#faa916"
                currentNumber.style.backgroundColor = "#faa916"
                await delay(time)
                minNumber = currentNumber;
                minNumber.style.backgroundColor = "#EF476F"
            }else{
                currentNumber.style.backgroundColor = "#faa916"
            }
        }
        await delay(time)

        if(window.innerWidth > 1024){
            updateElemPos(minNumber, "0", "-100", "300ms")
            await delay(time)
            let spanElem: HTMLSpanElement[] = Array.from(spanElemList);
            let minNumberIndex: number = spanElem.indexOf(minNumber) - 1
            let initialElemDist: number = 0;
            for(let i:number = minNumberIndex; i >= posIndex - 1; i--){
                const elem = spanElemList[i]
                const elemDiff:number = minNumber.offsetLeft - elem.offsetLeft
                const res = elemDiff + initialElemDist
                updateElemPos(elem, elemDiff.toString(), "0", "300ms")
                await delay(time);
                updateElemPos(elem, "0", "0", "0ms")
                updateElemPos(minNumber, res.toString(), "-100", "0ms")
                elem.before(minNumber);
                initialElemDist += elemDiff
            }
            await delay(time)
            updateElemPos(minNumber, "0", "-100", "300ms")
            await delay(time)
            updateElemPos(minNumber, "0", "0", "300ms")
        }else{
            const container = document.getElementById("container")
            container?.insertBefore(minNumber, container.childNodes[i])
        }
        minNumber.style.backgroundColor = "#20FC8F"
        spanElemList = document.querySelectorAll("#container span");
        posIndex++;
        await delay(time)
    }
}

