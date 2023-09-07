import { Algorithm } from "../model/Algorithm"

export const algorithms:Algorithm[] = [
    {
        name: "Bubble Sort",
        description: "The sorting bubble scrolls the list proggressively and compares two items at a time by swapping their positions if the second item is less than the first. In doing so, at the first iteration the maximum number will be in the last position, which will also be the final position. At the second iteration, the second maximum will be in the second-to-last position. The algorithm continues in this way until it has compared every single element in the array. At each iteration each element will thus be at its final position."
    },
    {
        name: "Insertion Sort",
        description: "The insertion sort compares the selected element with all elements prior to its position by inserting it at the correct position and translating the major elements to the right. The first index will therefore point to the second element in the array, while the second index will start at the first."
    },
    {
        name: "Selection Sort",
        description: "At every iteration the selection sort search the minimum element of the array and once it scroll all the array put it at the its position and so on. The element positioned doesn't take compare on the next iteration. At initial iteration the first element will always considered the mininum, and therefore compare with the next. If the next is minor then this element becomes the minimun and this process will repeated until the end of array."
    }
]