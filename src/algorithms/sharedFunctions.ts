export const updateElemPos = (
    number: HTMLSpanElement,
    x: string,
    y: string,
    time: string
  ) => {
    number.style.transitionDuration = time;
    number.style.transform = `translate(${x}px, ${y}px)`;
  };

  export const delay = (delayTime: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, delayTime);
    });
  };
  