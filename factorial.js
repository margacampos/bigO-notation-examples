const f = ( n ) => {
    if( n === 0 )return console.log("***************");
    for ( let i = 0; i < n; i++ ) {
        f( n - 1 );
    }
};

f(3);