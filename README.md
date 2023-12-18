# Sorting algorithms visualizer

## Table of Contents

- [Description](#description)
- [Sorting Algorithms](#sorting-algorithms)
- [Technologies Used](#technologies-used)

## Description

The project is a visualizer of the main sorting algorithms: bubble, insertion, selection and counting. On the page there is a brief description of how each algorithm works. The page contains a toolbar with which you can:

- create an array
- decide the length of the array (3-12)
- choose the speed of the animation (200ms - 2000ms)

Only after creating an array will it be possible to choose the desired algorithm. Once the algorithm is chosen the animation will begin showing how the algorithm works at the chosen speed.

The animation algorithm work for desktop, ipad / tablet and also mobile screen

##### Live project

https://sorting-algorithms-five.vercel.app/

## Sorting Algorithms

##### `BUBBLE SORT`

The sorting bubble scrolls the list proggressively and compares two items at a time by swapping their positions if the second item is less than the first. In doing so, at the first iteration the maximum number will be in the last position, which will also be the final position. At the second iteration, the second maximum will be in the second-to-last position. The algorithm continues in this way until it has compared every single element in the array. At each iteration each element will thus be at its final position.

![bubble-sort](./public/assets/bubble-sort.gif)

#### `INSERTION SORT`

The insertion sort compares the selected element with all elements prior to its position by inserting it at the correct position and translating the major elements to the right. The first index will therefore point to the second element in the array, while the second index will start at the first.

![insertion-sort](./public/assets/insertion-sort.gif)

#### `SELECTION SORT`

At every iteration the selection sort search the minimum element of the array and once it scroll all the array put it at the its position and so on. The element positioned doesn't take compare on the next iteration. At initial iteration the first element will always considered the mininum, and therefore compare with the next. If the next is minor then this element becomes the minimun and this process will repeated until the end of array.

![selection-sort](./public/assets/selection-sort.gif)

#### `COUNTING SORT`

##### STEP I

In first step the algorithm calculate the count of all the elements of the initial input. Then create a copy of each element in ascending order in a new array

##### STEP II

The second step is to move each element into its copy by incrementing a counter that determines how many elements are in that group.

##### STEP III

In the last step, starting with the first group, the elements are taken one by one: all elements in group 0 are moved to their final position, then elements in group 1 and so on to the end.

## Technologies Used

This app is made by React v18.2 with TypeScript and Tailwind in combination with MUI.

All the animations are made by Javascript.
