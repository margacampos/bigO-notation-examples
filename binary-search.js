const arr = [ ];
let start = 0;

for (let index = 0; index < 1000; index++) {
    arr.push(index);  
};

let end = arr.length - 1;
let targetTrue = 4;
let targetFalse = 1200;

const binarySearch = ( arr, start, end, target ) => {
    console.log( arr.slice( start, end ) );
    let midIndex = Math.floor( ( start + end ) / 2 );
    if ( arr[midIndex] === target )return true;
    else if (  end - start === 0 ) return false;
    if ( arr[midIndex] < target ) return binarySearch(arr, midIndex + 1, end, target );
    else return binarySearch( arr, start, midIndex - 1, target );
};

console.log(binarySearch( arr, start, end, targetTrue ));
console.log(binarySearch( arr, start, end, targetFalse ));
