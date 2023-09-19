import { delay } from "./sharedFunctions";

export const countingSort = async (time: number) => {
    let spanElemList: NodeListOf<HTMLSpanElement> =
    document.querySelectorAll("#container span")
    let spanElem: HTMLSpanElement[] = Array.from(spanElemList)
    let originalElemList: NodeListOf<HTMLSpanElement> =
    document.querySelectorAll("#container span")
    let originalElem: HTMLSpanElement[] = Array.from(originalElemList)
    const p = originalElem[0]
    const distanceElem = spanElem[1].offsetLeft - spanElem[0].offsetLeft
    const elemCountingList = await createCounterValues(spanElem)
    await delay(time)
    await countingElements(spanElem, time, elemCountingList)
    await delay(time)
    //document.querySelectorAll("#counting div")?.forEach(div => document.getElementById("counting")?.removeChild(div))
    sortElement(p, distanceElem, spanElem, time)
}

//Creo una copia dei valori
const createCounterValues = (arr:any) => {

    let newArr:any = [] //Array senza i valori duplicati
    let elemCountingList:any[] = []
    for(let i = 0; i < arr.length; i++){
        const checkElm = newArr.find((elem:any) => elem.id == arr[i].id) 
        if(!checkElm) newArr.push(arr[i])     
    }    

    //Ordino i valori
    newArr.sort((a:any, b:any) => a.id-b.id)

    //Creo i nuovi valori che saranno il conteggio
    newArr.forEach((elem:any) => {   
        const divContainer = document.createElement("div")
        divContainer.setAttribute("id", elem.id)
        divContainer.appendChild(elem.cloneNode(true))
        const initialCounter = "0"
        const pElem = document.createElement("p")
        pElem.innerText = initialCounter
        divContainer.appendChild(pElem)
        document.getElementById("counting")?.appendChild(divContainer)
        // elemCountingList.push({[elem.id]:[]})
    });
    return elemCountingList
}

//Conto gli elementi spostandoli
const countingElements = async (spanElem: HTMLSpanElement[], time:number, elemCountingList:any[]) => {
    let divElemList: NodeListOf<HTMLDivElement> = document.querySelectorAll("#counting div");
    let divElem: HTMLDivElement[] = Array.from(divElemList);
    for(let i = 0; i < spanElem.length; i++){
        const span = spanElem[i]
        for(let j = 0; j < divElem.length; j++){
            const div = divElem[j]
            if(span.id == div.id){
                await delay(time);  
                const a: HTMLSpanElement = div.firstElementChild as HTMLSpanElement
                const textCountingElem: HTMLParagraphElement = div.lastElementChild as HTMLParagraphElement
                textCountingElem.innerText = `${parseInt(textCountingElem.innerText) + 1}`
                const xDiff = a.offsetLeft - span.offsetLeft
                const yDiff = a.offsetTop - span.offsetTop
                span.style.transitionDuration = "300ms"
                span.style.transform = `translate(${xDiff}px,${yDiff}px)`
                // elemCountingList.forEach((elem) => {
                //     if(Object.keys(elem).toString() == `${div.id}`){
                //         elem[div.id].push(span)
                //     }
                // })
                break;
            }
        }
    }
}

const sortElement = async (originalElem:any, initialDistance:number, spanElem:any[], time:number) => {
    let sortedElemt = spanElem.sort((a:any, b:any) => a.id-b.id)
    let distanceElem = 0
    for(let i = 0; i< sortedElemt.length; i++){   
        const xDiff = originalElem.offsetLeft - sortedElemt[i].offsetLeft
        const yDiff = originalElem.offsetTop - sortedElemt[i].offsetTop
        //xDiff = xDiff + distanceElem    
        sortedElemt[i].style.transitionDuration = "300ms"
        sortedElemt[i].style.transform = `translate(${xDiff + distanceElem}px,${yDiff}px)`
        await delay(time)

        distanceElem = distanceElem + initialDistance

        // sortedElemt[i].style.transform = `translate(-${p.x}px, 0px)`
        // sortedElemt[i].style.transitionDuration = "300ms"
        // sortedElemt[i].style.transform = "initial" 
        // sortedElemt[i].style.transitionDuration = "0s"
        // originalElem[i].style.transform = "initial"
        // document.getElementById("container")?.insertBefore(sortedElemt[i], originalElem[i])
        // sortedElemt[i].style.transform = "translate(0px,0px)" 
        // sortedElemt[i].style.transitionDuration = "300ms"
        // await delay(time)

        // let originalElemList: NodeListOf<HTMLSpanElement> = document.querySelectorAll("#container span")
        // originalElem = Array.from(originalElemList)
    }

}
        