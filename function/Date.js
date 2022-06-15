
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    let dateUse = new Date (Date.parse (currentDate));
    let dateEnd = new Date (Date.parse (expirationDate));
  return dateUse <= dateEnd && dateUse.getDate () < dateEnd.getDate ()+1 ? true : false; 
}
console.log (checkCoupon ("123", "123", "July 9, 2015", "July 9, 2015"));