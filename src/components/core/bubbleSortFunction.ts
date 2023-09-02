export const bubbleSort = async (index: number, time: number) => {
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
        updateElemPos(currentNumber, nextNumber, "0", "-100", time);
        await delay(time);
        if (parseInt(currentNumber.id) > parseInt(nextNumber.id)) {
          const diff: number = nextNumber.offsetLeft - currentNumber.offsetLeft;
          updateElemPos(
            currentNumber,
            nextNumber,
            diff.toString(),
            "-100",
            time
          );
          await delay(time);
          updateElemPos(currentNumber, nextNumber, diff.toString(), "0", time);
          await delay(time);
          insertElementBefore(currentNumber, nextNumber);
        } else {
          updateElemPos(currentNumber, nextNumber, "0", "0", time);
          currentNumber = nextNumber;
        }
        await delay(time);
      }
    }
    await bubbleSort(index + 1, time);
  }
  setColorCompleteElem(spanElem, index + 1);
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
  currentNumber.style.transform = `translate(${x}px, ${y}px)`;
  currentNumber.style.transitionDuration = `${time - 100}ms`;
  nextNumber.style.transform = `translate(-${x}px, ${y}px)`;
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

const delay = (delayTime: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delayTime);
  });
};
