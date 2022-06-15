
function duplicateEncode(word){
var mass1 = word.toLowerCase().split("");
var mass2 = word.toLowerCase().split("");
var folder = [];
var folder2 = [];
mass1.map (function(element, index, array){ 
    var massSum = 0;
    var arr = [];
    for (var j = 0; j < mass2.length; j++){
        if (element == mass2[j]){
        arr[j] = 1;
        } else {
        arr[j] = 0;    
        }
        }
    for (var i = 0; i < arr.length; i++){
        massSum += arr[i];
    }
       if (massSum == 1){
           folder.push(index);
       } else {
        folder2.push(index);
       }
})

mass1.forEach (function(element, index, array){
    for (var h = 0; h <mass1.length; h++){
        if (index == folder[h]){
        mass1.splice (index, 1, "(");
    }
}
    for (var f = 0; f <mass1.length; f++){
    if (index == folder2[f]){
        mass1.splice (index, 1, ")");
    }
}
})

return mass1.join ('');
}
