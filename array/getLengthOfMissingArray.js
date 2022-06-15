
function getLengthOfMissingArray(arrayOfArrays) {
 if (arrayOfArrays == 0 || arrayOfArrays == undefined){
    return 0
  } else {

    var objOfArray = {};
    var mass = [];
    var massMin = [];
    var res;
    var min = 0;
    var three = [];

    arrayOfArrays.forEach((element, index, arr) => {
    if (element === 0 || element == []  || element.length == 0){
      res = 0;
    } else
    return   objOfArray[element] = element.length;
    });

    if ( res ==0){
      return 0;
    } else {
      for (key in objOfArray){
      mass[objOfArray[key]] = key;
      }
    for (key in objOfArray){
      massMin.push(objOfArray [key]);
      }
    min = Math.min.apply (null, massMin);
   
      for (var i = min; i < mass.length; i++){
      if (mass[i] == undefined){
        return res = i;
      }
    }
      
    }

    }
  }



alert ( getLengthOfMissingArray ([[3, 3, 0, 3, 1, 0],
[4, 2, 1],
[4, 0, 3, 1, 4, 1, 1],
[0, 4, 3, 0],
[3, 2, 1, 3, 1, 2, 1, 4],
[2, 3, 0, 3, 3, 4, 2, 3, 2, 2, 1],
[4, 3, 2, 4, 4, 1, 2, 3, 2, 4, 2, 1],
[1, 2, 3, 2, 0, 2, 2, 1, 3],
[1, 2, 0, 1, 2, 3, 3, 2, 0, 3]]) );
