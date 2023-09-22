export const updateElemPos = (
    number: HTMLSpanElement,
    x: string,
    y: string,
    time: string
  ) => {
    number.style.transitionDuration = time;
    number.style.transform = `translate(${x}px, ${y}%)`;
  };

  export const highlighElem = (elem: HTMLSpanElement, color: string) => {
    elem.style.backgroundColor = color;
  }

  export const delay = (delayTime: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, delayTime);
    });
  };

  export const disableButtons = (val:boolean, opacity:string) => [
    document.querySelectorAll("button").forEach((button) => {
      button.disabled = val;
      button.style.opacity = opacity
    })
  ]
  
  