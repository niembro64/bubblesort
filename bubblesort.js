function simpleSort(arr) {
    var temp;

    for (let x = 0; x < arr.length - 1; x++) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}
function bubbleSort(arr) {
    var temp;
    let len = arr.length;
    let checked;
    do {
        checked = false;
        for (let i = 0; i < len; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                checked = true;
            }
        }
    } while (checked);
    return arr;
}

// let arr = [5, 4, 1, 6, 8, 14, 1, 3];
let arr1 = [15, 5, 4, 1, 6, 8, 14, 1, 3, -11];
let arr2 = [3, 2, 1];
let arr3 = [];

console.log(arr1);
console.log(bubbleSort(arr1));
