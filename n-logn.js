const nLogN = (n) =>{
    let y = n;
    while ( n > 1 ) {
        n = Math.floor( n / 2 );
        for ( let i = 0; i <= y; i++ ){
            console.log(i);
        }
    }
};
nLogN(8);

const mergeSort = ( arr ) => {
    if( arr.length < 2 ) return arr;

    const midIndex = Math.floor( arr.length / 2 );
    const leftArr = arr.slice( 0, midIndex );
    const rightArr = arr.slice( midIndex, arr.length );

    return merge( mergeSort(leftArr), mergeSort(rightArr) );
};

const merge = ( leftArr, rightArr ) => {
    let resultArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while ( leftIndex < leftArr.length && rightIndex < rightArr.length ){
        if( leftArr[leftIndex] < rightArr[rightIndex] ){
            resultArr.push( leftArr[leftIndex] );
            leftIndex++;
        }else{
            resultArr.push( rightArr[rightIndex] );
            rightIndex++;
        }
    }
    return resultArr.concat( leftArr.slice( leftIndex ) ).concat( rightArr.slice( rightIndex ) );
};

const array = [ 2, 45, 394, 7, 93, 2, 3, 10 ];
console.log(mergeSort(array));