
function unluckyDays(year){
    let date = new Date (year+"-01-13");
    let friday13 = 0;
for ( let i = 0; i<12; i++) {
    date.setMonth (i);
    let friday = date.getDay ();
if (friday  == 5) {
    friday13++;   
}

}

return friday13;
}  
console.log (unluckyDays(2015));
