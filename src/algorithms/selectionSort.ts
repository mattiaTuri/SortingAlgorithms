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

        const parentElement = document.getElementById("container")!
        if(window.innerWidth > 1024){
            minNumber.style.transitionDuration = "300ms"
            minNumber.style.transform = "translate(0, -100px)"
            await delay(time)
            let spanElem: HTMLSpanElement[] = Array.from(spanElemList);
            let minNumberIndex: number = spanElem.indexOf(minNumber) - 1
            let initialElemDist: number = 0;
            for(let i:number = minNumberIndex; i >= posIndex - 1; i--){
                const elem = spanElemList[i]
                const elemDiff:number = minNumber.offsetLeft - elem.offsetLeft
                const res = elemDiff + initialElemDist
                elem.style.transitionDuration = "300ms"
                elem.style.transform = `translate(${elemDiff.toString()}px, 0)`
                await delay(time);
                elem.style.transitionDuration = "0ms"
                elem.style.transform = "translate(0, 0)"
                minNumber.style.transform = `translate(${res.toString()}px, -100px)`
                elem.before(minNumber);
                initialElemDist += elemDiff
                await delay(time)
            }
            minNumber.style.transitionDuration = "300ms"
            minNumber.style.transform = `translate(0px, -100px)`
            await delay(time)
            minNumber.style.transform = `translate(0px, 0px)`
        }
        minNumber.style.backgroundColor = "#20FC8F"
        spanElemList = document.querySelectorAll("#container span");
        posIndex++;
        await delay(time)
    }
}

const delay = (delayTime: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, delayTime);
    });
  };
  