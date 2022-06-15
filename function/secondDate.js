
function formatDuration (seconds) {
if (seconds === 0){
    return "now";
} else {

let  resArray = [];
let timeSet = {
        year: 31536000, 
        day: 86400, 
        hour: 3600, 
        minute: 60, 
        second: 1
};
    
for (let key in timeSet) {
    if (seconds >= timeSet[key]) {
      let value = parseInt(seconds/timeSet[key]);
      resArray.push(value += value > 1 ? ' ' + key + 's' : ' ' + key);
      seconds = seconds % timeSet[key];
    }
  }

  return resArray.join(', ').replace(/,[^]$/,' and'+'$1');
}
}

console.log(formatDuration (86022));