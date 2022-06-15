
    var arr = [-1, 44, -1, 34, 12, -1, 50];
    var obj = {};
    var mass =[];
    arr.forEach(function(element, index, array){
    if (element ==-1){
        obj[index] = element;
    }
        });
        mass = arr.filter (function(num){
            return num > 0;
        })

        mass.sort();

        for (key in obj) {
        mass.splice(key, 0, -1);
    }