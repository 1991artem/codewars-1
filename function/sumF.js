
    function calculate(...arguments){
    var sum = 0;
    for (var i = 0; i < arguments.length; i++){
        sum+=arguments[i];
    }
    return function (...arguments){
        for (var i = 0; i < arguments.length; i++){
        sum+=arguments[i];
    }
    return sum;
    }
    }
    
    alert ( calculate(2,4)(3,7,1) );

