
    var str = "moOse";

    alert(isIsogram (str));
    function isIsogram (str) {
    var oneReg = str.toLowerCase();
    var string = oneReg.split ("");
    var res;
    return string.every(function (element, index, array){
              res = array.indexOf(element, index+1);
              return res == -1;
            });
}
