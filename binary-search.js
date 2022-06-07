const arr = [1,4,5,7,9,24];
let start = 0;
let end = arr.length - 1;
let targetTrue = 4;
let targetFalse = 25;

const binarySearch = ( arr, start, end, target ) => {
    let midIndex = Math.floor( ( start + end ) / 2 );
    if ( arr[midIndex] === target )return true;
    else if (  end - start === 0 ) return false;
    if ( arr[midIndex] < target ) return binarySearch(arr, midIndex + 1, end, target );
    else return binarySearch( arr, start, midIndex - 1, target );
};

console.log(binarySearch( arr, start, end, targetTrue ));
console.log(binarySearch( arr, start, end, targetFalse ));
