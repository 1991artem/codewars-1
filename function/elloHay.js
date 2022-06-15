
function pigIt(str){

 let array = str.split(' ');
 let arrSymbol = [];
 array.forEach(element => {
    let firstSymbol;
        element = element.split ('');
        if (!/[!.?)()]/i.test(element)){
        firstSymbol = element.splice(0,1);
        element.push(firstSymbol+'ay');
        }
        arrSymbol.push (element.join('')); 
 });  

return arrSymbol.join(' ');
}

console.log(pigIt('O tempora o mores !'));