import { delay, disableButtons, highlighElem, updateElemPos } from "./sharedFunctions";

export const insertionSort = async (time: number) => {
  disableButtons(true, "0.3");
  let spanElemList: NodeListOf<HTMLSpanElement> = document.querySelectorAll("#container span");

  for (let i: number = 1; i < spanElemList.length; i++) {
    for (let j: number = 0; j < spanElemList.length; j++) {
      let currentNumber = spanElemList[i];
      if (currentNumber === undefined) break;
      let n = j;
      highlighElem(currentNumber, "#EF476F");
      updateElemPos(currentNumber, "0", "-150", "200ms");
      let initialElemDist: number = 0;
      while (n >= 0) {
        let prevNumber = spanElemList[n];
        await delay(time);
        if (parseInt(currentNumber.id) < parseInt(prevNumber.id)) {
          const elemDiff: number = currentNumber.offsetLeft - prevNumber.offsetLeft;
          updateElemPos(prevNumber, elemDiff.toString(), "0", "200ms");
          await delay(time);
          const res = elemDiff + initialElemDist;
          updateElemPos(prevNumber, "0", "0", "0ms");
          updateElemPos(currentNumber, res.toString(), "-150", "200ms");
          prevNumber.before(currentNumber);
          spanElemList = document.querySelectorAll("#container span");
          n--;
          initialElemDist += elemDiff;
        } else {
          highlighElem(prevNumber, "#20FC8F");
          break;
        }
      }
      i++;
      await delay(time);

      updateElemPos(currentNumber, "0", "-150", "200ms");
      await delay(time);
      updateElemPos(currentNumber, "0", "0", "200ms");
      highlighElem(currentNumber, "#20FC8F");
      await delay(time);
    }
    break;
  }

  document.querySelectorAll("#container span").forEach((elem: any) => (elem.style.backgroundColor = "#20FC8F"));

  disableButtons(false, "1");
};
