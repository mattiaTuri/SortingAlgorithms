export const selectionSort = async (time:number) => {
    let spanElemList: NodeListOf<HTMLSpanElement> =
    document.querySelectorAll("#container span");
    let index = 1
    for(let i:number = 0; i < spanElemList.length; i++){
        let minNumber = spanElemList[i]
        minNumber.style.backgroundColor = "#EF476F"
        for(let j:number = index; j < spanElemList.length; j++){
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
        minNumber.style.backgroundColor = "#20FC8F"
        parentElement.insertBefore(minNumber, parentElement.childNodes[i]);
        spanElemList = document.querySelectorAll("#container span");
        index++;
    }
}

const delay = (delayTime: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, delayTime);
    });
  };
  