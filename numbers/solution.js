
function solution(number){
var mass = [];
var sum = 0;
for (var i = 0; i < number; i++){
    if (i%3 == 0 || i%5 == 0){
        mass.push(i);
    }
} 
for (var j = 0; j< mass.length; j++){
    sum += mass[j];
}
return sum;
}  
alert (solution(10));

