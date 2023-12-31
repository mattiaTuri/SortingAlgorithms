import { delay, disableButtons, highlighElem } from "./sharedFunctions";

export const bubbleSort = async (index: number, time: number) => {
  disableButtons(true, "0.3")
  let spanElemList: NodeListOf<HTMLSpanElement> =
    document.querySelectorAll("#container span");
  let spanElem: HTMLSpanElement[] = Array.from(spanElemList);
  let currentNumber = spanElem[0];
  let nextNumber: any = [];
  setColorCompleteElem(spanElem, index);

  if (spanElem.length > 1) {
    for (let i: number = 0; i < spanElem.length; i++) {
      if (i != spanElem.length - 1) {
        nextNumber = spanElem[i + 1];
        highlighElem(currentNumber, "#FF3C38") 
        highlighElem(nextNumber, "#FF3C38")   
        updateElemPos(currentNumber, nextNumber, "0", "-150", time)   
        await delay(time);
        if (parseInt(currentNumber.id) > parseInt(nextNumber.id)) {
          const diff: number = nextNumber.offsetLeft - currentNumber.offsetLeft;
          updateElemPos(currentNumber, nextNumber, diff.toString(), "-150", time)
          await delay(time);
          updateElemPos(currentNumber, nextNumber, diff.toString(), "0", time)
          await delay(time);
          highlighElem(currentNumber, "#faa916") 
          highlighElem(nextNumber, "#faa916")   
          insertElementBefore(currentNumber, nextNumber);
        } else {
          highlighElem(currentNumber, "#faa916") 
          highlighElem(nextNumber, "#faa916")   
          updateElemPos(currentNumber, nextNumber, "0", "0", time)
          currentNumber = nextNumber;
        }
      }
      await delay(time);
    }
    await bubbleSort(index + 1, time);
  }
  setColorCompleteElem(spanElem, index + 1);
  disableButtons(false, "1")
};

const setColorCompleteElem = (array: HTMLSpanElement[], index: number) => {
  array
    .splice(array.length - index, index)
    .forEach(
      (elem: HTMLSpanElement) => (elem.style.backgroundColor = "#20FC8F")
    );
};

const updateElemPos = (
  currentNumber: HTMLSpanElement,
  nextNumber: HTMLSpanElement,
  x: string,
  y: string,
  time: number
) => {
  currentNumber.style.transform = `translate(${x}px, ${y}%)`;
  currentNumber.style.transitionDuration = `${time - 100}ms`;
  nextNumber.style.transform = `translate(-${x}px, ${y}%)`;
  nextNumber.style.transitionDuration = `${time - 100}ms`;
};

const insertElementBefore = async (
  currentNumber: HTMLSpanElement,
  nextNumber: HTMLSpanElement
) => {
  currentNumber.style.transform = `initial`;
  currentNumber.style.transitionDuration = "0s";
  nextNumber.style.transform = `initial`;
  document.getElementById("container")?.insertBefore(nextNumber, currentNumber);
};