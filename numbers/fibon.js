
function nthFibo(n){
    if (n == 0){
        return 0;
    }
    else if (n == 1 || n == 2){
        return 1;
    } else {
        var fib1 = 1;
    var fib2 = 1;
    var fibRes = 0;
    for (var i = 3; i < n; i++){
        fibRes = fib1 + fib2;
        fib1 = fib2;
        fib2 = fibRes
    }
    return fib2;
    }
}
alert( nthFibo(3) );

