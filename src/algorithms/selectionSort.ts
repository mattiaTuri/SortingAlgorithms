import { delay, disableButtons, highlighElem, updateElemPos } from "./sharedFunctions";

export const selectionSort = async (time:number) => {
    disableButtons(true, "0.3")
    let spanElemList: NodeListOf<HTMLSpanElement> =
    document.querySelectorAll("#container span");
    let posIndex = 1
    for(let i:number = 0; i < spanElemList.length; i++){
        let minNumber = spanElemList[i]
        highlighElem(minNumber, "#EF476F")
        for(let j:number = posIndex; j < spanElemList.length; j++){
            let currentNumber = spanElemList[j]
            highlighElem(currentNumber, "#FF3C38")
            await delay(time)
            if(parseInt(minNumber.id) > parseInt(currentNumber.id)){
                highlighElem(minNumber, "#faa916")
                highlighElem(currentNumber, "#faa916")
                await delay(time)
                minNumber = currentNumber;
                highlighElem(minNumber, "#EF476F")
            }else{
                highlighElem(currentNumber, "#faa916")
            }
        }
        await delay(time)

        updateElemPos(minNumber, "0", "-150", "300ms")
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
            updateElemPos(minNumber, res.toString(), "-150", "0ms")
            elem.before(minNumber);
            initialElemDist += elemDiff
        }
        await delay(time)
        updateElemPos(minNumber, "0", "-150", "300ms")
        await delay(time)
        updateElemPos(minNumber, "0", "0", "300ms")
        
        highlighElem(minNumber, "#20FC8F")
        spanElemList = document.querySelectorAll("#container span");
        posIndex++;
        await delay(time)
    }
    disableButtons(false, "1")
}

