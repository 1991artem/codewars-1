
var runLengthEncoding = function(str){
    let arrStr = str.split ('');
    let arrRes = [];
    arrStr.forEach(function(element, index, array) { 
            let i = 1;
                while (element == array[index+1]) {
                i++;
                array.splice (index+1,1);
                }  
        arrRes.push([i, element]);
    });
    
    return arrRes;
  }

  console.log (runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"));

