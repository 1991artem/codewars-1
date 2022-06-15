
// Преобразуем строки в массивы (функция)
function highAndLow (numbers){
    var mass  = numbers.split (" ");
    mass.sort();
    return  Math.max.apply(null, mass)+ " " + Math.min.apply(null, mass);
}

// Получим массивы из входных данных
var numbers = "1 2 3 4 5";
alert( highAndLow (numbers) );
