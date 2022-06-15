
    function deepCount(array){
        function deep (array){
    array.forEach ((array) =>{
            if (Array.isArray (array) == true){ 
    sum+=array.length;
    deep(array);
    }
    });
}
    var sum = 0;
    deep (array);
    return sum +array.length;
    }
    alert (deepCount([[1], 2, [3, 4, [5]]]));
