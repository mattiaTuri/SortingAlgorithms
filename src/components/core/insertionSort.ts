export const insertionSort = async (time:number) => {
    let spanElemList: NodeListOf<HTMLSpanElement> =
    document.querySelectorAll("#container span");

    for(let i:number = 1; i < spanElemList.length; i++){        
        for(let j:number = 0; j < spanElemList.length; j++){
            let currentNumber = spanElemList[i]
            if(currentNumber == undefined) break;
            let n = j
            while(n >= 0){
                let prevNumber = spanElemList[n]
                highlighElem(prevNumber, currentNumber, "red")
                await delay(time);
                if(parseInt(currentNumber.id) < parseInt(prevNumber.id)){
                    document.getElementById("container")?.insertBefore(currentNumber, prevNumber);
                    spanElemList = document.querySelectorAll("#container span");
                    highlighElem(prevNumber, currentNumber, "#faa916")
                    n--
                }else{
                    highlighElem(prevNumber, currentNumber, "#faa916")
                    break;
                }
                await delay(time);
            }
            i++
            await delay(time);
        }
        break;
    }

    document.querySelectorAll("#container span").forEach((elem:any) => elem.style.backgroundColor = "#20FC8F");
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
  
