export const insertionSort = async (time:number) => {
    let spanElemList: NodeListOf<HTMLSpanElement> =
    document.querySelectorAll("#container span");
    let spanElem: HTMLSpanElement[] = Array.from(spanElemList);

    for(let i:number = 1; i < spanElemList.length; i++){        
        for(let j:number = 0; j < spanElemList.length; j++){
            let currentNumber = spanElemList[i]
            if(currentNumber == undefined) break;
            let n = j
            window.innerWidth < 1024 ? highlighElem(currentNumber, "red") : updateElemPos(currentNumber, "0", "-100", "300ms")
            let initialElementDistance:number = 0
            while(n >= 0){
                let prevNumber = spanElemList[n]
                await delay(time);            
                if(parseInt(currentNumber.id) < parseInt(prevNumber.id)){
                    const diff:number = currentNumber.offsetLeft - prevNumber.offsetLeft
                    window.innerWidth < 1024 ? highlighElem(prevNumber, "red") : updateElemPos(prevNumber, diff.toString(), "0", "300ms")
                    await delay(time);  
                    const res = diff + initialElementDistance
                    window.innerWidth < 1024 ? highlighElem(prevNumber, "#faa916") : 1024 && updateElemPos(prevNumber, "0", "0", "0ms")
                    window.innerWidth >= 1024 && updateElemPos(currentNumber, res.toString(), "-100", "300ms")
                    prevNumber.before(currentNumber)
                    spanElemList = document.querySelectorAll("#container span");
                    n--
                    initialElementDistance += diff
                }else{
                    break;
                }

            }
            i++
            await delay(time);
            window.innerWidth < 1024 ? highlighElem(currentNumber, "#faa916") : updateElemPos(currentNumber, "0", "-100", "300ms")
            await delay(time);
            window.innerWidth < 1024 ? highlighElem(currentNumber, "#faa916") : updateElemPos(currentNumber, "0", "0", "300ms")
            await delay(time);
        }
        break;
    }

    document.querySelectorAll("#container span").forEach((elem:any) => elem.style.backgroundColor = "#20FC8F");
}

const updateElemPos = (number: HTMLSpanElement, x:string, y:string, time:string) => {
    number.style.transitionDuration = time
    number.style.transform = `translate(${x}px, ${y}px)`
}

const highlighElem = (currentNumber: HTMLSpanElement, color:string) => {
      currentNumber.style.backgroundColor = color;
}

const delay = (delayTime: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, delayTime);
    });
  };
  
