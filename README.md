[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/7eEMzrNd)
# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

In my code I am getting all the permutations and checking each one if it is sorted.
We have N which is the length of the array. In the code there are 4 sections to anaylze.
swapElements: This function swaps the elements in the array in order to create the permutations.
isSorted: Checks if the array is sorted.
generatePermutations: This function uses swapElements to genereate the permutations of the array.
permutationSort: Uses generated permutations to find the sorted array. 

## Worst Case 
In the worst case senerio the array would be in reverse order causing the algorithm to need to create and check every permutation before finding the sorted array. If the array is size N the number of permutations would be N! making the worst case time complexity $O(N!)$

## Best Case 
The best case sinerio would be when the array is already sorted. In this case the algorithm would only need to check the first permutation which would typically give the best case time complexity of $O(1)$ however in this algorithm we are still need to get alal the permutations which would leave us with the best case time complexity of $O(N!)$.

## Randomly generated permutations
If the permutations were generated randomly this could cause an increased efficienticy in the average case. Howevere would not effect the worst case becasue by chance it may still have to check all the permutations of the array before finding the sorted permutation. 

\\ I recieved help form the TA 
\\ I reviewed repositories from 
\\ brute-force-sorting-Dhruv8806
\\ brute-force-sorting-IshitaPatel18
\\ brute-force-sorting-swilso59
\\ brute-force-sorting-boboestes14

