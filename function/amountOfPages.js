
    function amountOfPages(summary){
    let str = "";
    for (var i = 1; i<= 100; i++){
        str+=i;

      if (str.length == summary){
          break;
      }
  }
  return i;
}

console.log (amountOfPages(25));
