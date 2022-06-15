
    function digital_root(n) {
            let array = [];
            array = Array.from(n.toString(), Number);
            let sum = 0;
            for (let i = 0; i< array.length; i++){
                sum+=array[i];
        }
       return sum <10? sum: digital_root(sum);
}

console.log (digital_root(493193));