sortByBit([3, 8, 3, 6, 5, 7, 9, 1]) // => [1, 8, 3, 3, 5, 6, 9, 7]
                                            1,1000,11,11,101,110,1001,111

function sortByBit(arr) {
    arr.forEach((element, index, array) => {
    array[index] = element.toString (2);    
    });

    function sum (mass){
    var sum = 0;
    for (var i = 0; i < mass.length; i++){
        sum +=parseInt( mass[i]);
    }
    return sum;
    }
    
    arr.sort ((a,b) =>{
        if (sum(a) == sum(b)){
            return parseInt(a) - parseInt (b);
        }
    return sum(a) - sum (b);
    })
    arr.forEach((element, index, array) => {
    array[index] = parseInt(element, 2);    
    });
return arr;
}
alert (sortByBit([3, 8, 3, 6, 5, 7, 9, 1]));