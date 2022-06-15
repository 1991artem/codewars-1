
   let matrix = [[0, 1, '^^'],[0, '^^', 2],['^^', 1, 2]];

function countCats(matrix) {
    if (matrix.lengt == 0) return;
    let number = 0;
    for (let i = 0; i<matrix.length; i++){
      for (let j = 0; j< matrix[i].length; j++){
       if (matrix[i][j] == '^^'){
         number++ 
       }
      }
    }
    return number;
   }

   let num = countCats(matrix);
   console.log(num);
