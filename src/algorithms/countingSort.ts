import { delay, disableButtons } from "./sharedFunctions";

export const countingSort = async (time: number) => {
  disableButtons(true, "0.3");
  let spanElemList: NodeListOf<HTMLSpanElement> = document.querySelectorAll("#container span");
  let spanElements: HTMLSpanElement[] = Array.from(spanElemList);
  let originalElemList: NodeListOf<HTMLSpanElement> = document.querySelectorAll("#container span");
  let originalElements: HTMLSpanElement[] = Array.from(originalElemList);
  const firstElem = originalElements[0];
  const distanceElem = spanElements[1].offsetLeft - spanElements[0].offsetLeft;
  await createCounterValues(spanElements);
  await delay(time);
  await countingElements(spanElements, time);
  await delay(time);
  await sortElement(firstElem, distanceElem, spanElements, time);
  await delay(time);
  clearCountingChild();
  disableButtons(false, "1");
};

//Create copy of the values
const createCounterValues = async (spanElements: HTMLSpanElement[]) => {
  //Array without duplicate values
  let elemCountingList: HTMLSpanElement[] = [];

  for (let i = 0; i < spanElements.length; i++) {
    const checkElem = elemCountingList.find((elem: any) => elem.id === spanElements[i].id);
    if (!checkElem) elemCountingList.push(spanElements[i]);
  }

  //Sort values
  elemCountingList.sort((a: HTMLSpanElement, b: HTMLSpanElement) => parseInt(a.id) - parseInt(b.id));
  const countingContainer: any = document.getElementById("counting");
  countingContainer.style.display = "flex";
  //I create the new values and the elements count
  elemCountingList.forEach((elem: HTMLSpanElement) => {
    const divContainer = document.createElement("div");
    divContainer.setAttribute("data-id", elem.id);
    divContainer.appendChild(elem.cloneNode(true));
    const initialCounter = "0";
    const pElem = document.createElement("p");
    pElem.innerText = initialCounter;
    divContainer.appendChild(pElem);
    countingContainer.appendChild(divContainer);
  });
};

//Count elements moving them to the right position
const countingElements = async (spanElements: HTMLSpanElement[], time: number) => {
  let divElemList: NodeListOf<HTMLDivElement> = document.querySelectorAll("#counting div");
  let divElem: HTMLDivElement[] = Array.from(divElemList);
  for (let i = 0; i < spanElements.length; i++) {
    const span = spanElements[i];
    for (let j = 0; j < divElem.length; j++) {
      const div = divElem[j];
      if (span.id === div.getAttribute("data-id")) {
        const a: HTMLSpanElement = div.firstElementChild as HTMLSpanElement;
        const textCountingElem: HTMLParagraphElement = div.lastElementChild as HTMLParagraphElement;
        textCountingElem.innerText = `${parseInt(textCountingElem.innerText) + 1}`;
        const xDiff = a.offsetLeft - span.offsetLeft;
        const yDiff = a.offsetTop - span.offsetTop;
        span.style.transitionDuration = "300ms";
        span.style.transform = `translate(${xDiff}px,${yDiff}px)`;
        await delay(time);
        break;
      }
    }
  }
};

//Finally sort elements
const sortElement = async (firstElem: HTMLSpanElement, initialDistance: number, spanElements: HTMLSpanElement[], time: number) => {
  let sortedElem = spanElements.sort((a: HTMLSpanElement, b: HTMLSpanElement) => parseInt(a.id) - parseInt(b.id));
  let distanceElem = 0;
  for (let i = 0; i < sortedElem.length; i++) {
    const currentElem = sortedElem[i];
    const xDist = firstElem.offsetLeft - currentElem.offsetLeft;
    const yDist = firstElem.offsetTop - currentElem.offsetTop;
    currentElem.style.transitionDuration = "300ms";
    currentElem.style.transform = `translate(${xDist + distanceElem}px,${yDist}px)`;
    currentElem.style.backgroundColor = "#20FC8F";

    const textCountingElem: HTMLParagraphElement = document.querySelector(`#counting > div[data-id='${currentElem.id}']`)?.lastChild as HTMLParagraphElement;
    textCountingElem.innerText = `${parseInt(textCountingElem.innerText) - 1}`;

    distanceElem = distanceElem + initialDistance;
    await delay(time);
  }
};

const clearCountingChild = () => {
  document.querySelectorAll("#counting div").forEach((child) => {
    console.log(child);
    child.remove();
  });

  document.getElementById("counting")!.style.display = "none";
};
