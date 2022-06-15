
    function myLanguages(results) {
    let arrResults60 = [];
    let arrResults = [];
    for (let key in results){
        arrResults.push ([key, results[key]]);
    }
    arrResults.sort(function(a, b) {
    return b[1] - a[1];
});
    for (let element of arrResults.filter(elements => elements[1] >= 60)){
        arrResults60.push(element[0]);
    }
return arrResults60;
}

let obj = {"Java": 10, "Ruby": 80, "Python": 65};
console.log(myLanguages(obj));
