// Function to swap elements at indices a and b in array x
function swapElements(x, a, b) {
    let temp = x[a];  // Store the value at index 'a' temporarily
    x[a] = x[b];      // Assign the value at index 'b' to index 'a'
    x[b] = temp;      // Assign the stored value to index 'b'
}

// Function to check if an array a is sorted in non-decreasing order
function isSorted(a) {
    for (let i = 0; i < a.length - 1; i++) {
        if (a[i] > a[i + 1]) {
            return false;  // If any element is greater than the next one, array is not sorted
        }
    }
    return true;  // Array is sorted if loop completes without finding out-of-order elements
}

// Function to generate permutations of an array a
function generatePermutations(a, index, permutations) {
    if (index == a.length) {
        permutations.push([...a]);  // Add a copy of the current permutation to the 'permutations' array
        console.log(a);  // Log the current permutation to the console
        if (isSorted(a)) {
            console.log("Found sorted array: '" + a + "'...");  // If the current permutation is sorted, log it
        }
    } else {
        for (var i = index; i < a.length; i++) {
            swapElements(a, index, i);  // Swap elements at indices 'index' and 'i' in the array 'a'
            generatePermutations(a, index + 1, permutations);  // Recursively generate permutations with the next index
            swapElements(a, index, i);  // Swap elements back to restore original order for backtracking
        }
    }
    return permutations;  // Return the array of permutations
}

// Function to sort an array a by finding a sorted permutation
function permutationSort(a) {
    let permutations = [];  // Initialize an array to store permutations
    let perms = generatePermutations(a, 0, permutations);  // Generate all permutations of the input array
    for (let permCounter = 0; permCounter < perms.length; permCounter++) {
        if (isSorted(perms[permCounter])) {
            for (let j = 0; j < perms[permCounter].length; j++) {
                a[j] = perms[permCounter][j];  // Copy elements of the sorted permutation to the original array 'a'
            }
            return permCounter;  // Return the number of permutations until a sorted permutation is found
        }
    }
}
