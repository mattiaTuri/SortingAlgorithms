export const insertionSort = async (time:number) => {
    let spanElemList: NodeListOf<HTMLSpanElement> =
    document.querySelectorAll("#container span");
    let spanElem: HTMLSpanElement[] = Array.from(spanElemList);

    for(let i:number = 1; i < spanElemList.length; i++){        
        for(let j:number = 0; j < spanElemList.length; j++){
            let currentNumber = spanElemList[i]
            if(currentNumber == undefined) break;
            let n = j
            updateElemPos(currentNumber, "0", "-100")
            let initialElementDistance:number = 0
            while(n >= 0){
                let prevNumber = spanElemList[n]
                //highlighElem(prevNumber, currentNumber, "red")
                await delay(time);            
                if(parseInt(currentNumber.id) < parseInt(prevNumber.id)){
                    const diff:number = currentNumber.offsetLeft - prevNumber.offsetLeft
                    updateElemPos(prevNumber, diff.toString(), "0")
                    await delay(time);   
                    prevNumber.style.transitionDuration = "0ms"
                    prevNumber.style.transform = "translate(0,0)"
                    currentNumber.style.transform = "300ms"
                    currentNumber.style.transform = `translate(${diff + initialElementDistance}px,-100px)`
                    //currentNumber.style.transform = `translate(${diff}px, -100px)`
                    prevNumber.before(currentNumber)
                    //document.getElementById("container")?.insertBefore(currentNumber, prevNumber);
                    spanElemList = document.querySelectorAll("#container span");
                    //highlighElem(prevNumber, currentNumber, "#faa916")
                    n--
                    initialElementDistance += diff
                }else{
                    //updateElemPos(currentNumber, "0", "0")
                    break;
                    //highlighElem(prevNumber, currentNumber, "#faa916")
                }

            }
            i++
            await delay(time);
            //const diff = currentNumber.offsetLeft - prevNumber.offsetLeft
            updateElemPos(currentNumber, "0", "-100")
            await delay(time);
            updateElemPos(currentNumber, "0", "0")
            await delay(time);
        }
        break;
    }

    document.querySelectorAll("#container span").forEach((elem:any) => elem.style.backgroundColor = "#20FC8F");
}

const updateElemPos = (number: HTMLSpanElement, x:string, y:string) => {
    number.style.transitionDuration = "300ms"
    number.style.transform = `translate(${x}px, ${y}px)`
}

const highlighElem = (prevNumber: HTMLSpanElement,
    currentNumber: HTMLSpanElement, color:string) => {
      prevNumber.style.backgroundColor = color;
      currentNumber.style.backgroundColor = color;
}

const delay = (delayTime: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, delayTime);
    });
  };
  
