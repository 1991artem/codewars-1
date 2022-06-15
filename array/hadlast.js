
function head (num){
    var clone = num.slice(0);
    return clone[0];
}
function tail (num){
    var clone = num.slice(0);
    clone.shift();
    return clone;
}
function init (num){
    var clone = num.slice(0);
    clone.pop();
    return clone;
}
function last (num){
    var clone = num.slice(0);
    return clone[clone.length-1];
}
alert(head([1, 2, 3, 4, 5]));
alert(tail([1, 2, 3, 4, 5]));
alert(init([1, 2, 3, 4, 5]));
alert(last([1, 2, 3, 4, 5]));
