//HIGHEST NUMBER 
function largest(arr) {
    let i;
    let max = arr[0];

    
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }

    return max;
}

let arr = [45,67,99,108];
console.log("Largest in given array is " + largest(arr));