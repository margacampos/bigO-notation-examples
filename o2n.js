// Find n number of the fibonacci sequence

const fib = ( n ) => {
    if( n === 0 )return 0;
    if( n === 1 )return 1;
    return fib( n - 1 ) + fib( n - 2 );
};

// This function is O(2^(n-1)) but removing the constants we get O(2^n); 