const arr = [1,4,5,7,9,24];
let start = 0;
let end = arr.length - 1;
let target = 24;

const binarySearch = ( arr, start, end, target ) => {
    let midIndex = Math.floor( ( start + end ) / 2 );
    if ( arr[midIndex] === target )return true;
    if ( arr[midIndex] < target )return binarySearch(arr, midIndex + 1, end, target );
    else binarySearch( arr, start, midIndex - 1, target );
};

console.log(binarySearch( arr, start, end, target ));