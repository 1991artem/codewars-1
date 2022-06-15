
function formatDuration (seconds) {
    let str, strSec, strMin, strHour, strDay, strYear;
    let Year = +Math.floor (seconds/31536000);
    let Day = +Math.floor ((seconds - (Year*31536000))/86400);
    let Hour = +Math.floor ((seconds - (Year*31536000) - Day*86400)/3600);
    let Min = +Math.floor ((seconds - Year*31536000 - Day*86400 - Hour*3600)/60);
    let Sec = +Math.floor (seconds - Year*31536000 - Day*86400 - Hour*3600- Min*60);

if (Sec >1 && Min == 0 && Hour == 0 && Day == 0 && Year == 0){
    strSec =`${Sec} seconds`;
} else if (Sec == 1 && Min == 0 && Hour == 0 && Day == 0 && Year == 0){
    strSec =`${Sec} second`; 
} else if (Sec ==1){
    strSec = ` and ${Sec} second`;
}else if (Sec >1){
    strSec = ` and ${Sec} seconds`;
}else  strSec = '';

if (Min >1 && Sec != 0){
    strMin = `${Min} minutes`;
} else if (Min ==1 && Sec != 0){
    strMin = `${Min} minute`;
}else if (Min ==1 && Sec == 0){
    strMin = ` and ${Min} minute`;
}else if (Min >1 && Sec == 0){
    strMin = ` and ${Min} minutes`;
}else strMin = '';

if (Hour ==0){
    strHour = '';
} else if (Hour >1 && (Min !=0 || Sec !=0)){
    strHour = `${Hour} hours, `; 
} else if (Hour ==1 && (Min !=0 || Sec !=0)){
    strHour = `${Hour} hour, `;
}else if (Hour ==1 && Min ==0 && Sec ==0 && (Day !=0 || Year !=0)){
    strHour = ` and ${Hour} hour`;
}else if (Hour >1 && (Min ==0 && Sec ==0)){
    strHour = ` and ${Hour} hours`;
} else strHour = `${Hour} hour`;

if (Day ==0){
    strDay = '';
} else if (Day >1 && (Hour !=0 || Min !=0 || Sec !=0)){
    strDay = `${Day} days, `;
} else if (Day ==1 && (Hour !=0 || Min !=0 || Sec !=0)){
    strDay = `${Day} day, `;
}else if (Day ==1 && (Hour ==0 && Min ==0 && Sec ==0)){
    strDay = ` and ${Day} day`;
}else if (Day >1 && (Hour ==0 && Min ==0 && Sec ==0)){
    strDay = ` and ${Day} days`;
} else strDay = `${Day} day`;

if (Year ==0){
    strYear = '';
} else if (Year >1 && (Day !=0 || Hour !=0 || Min !=0 || Sec !=0)){
    strYear = `${Year} years, `;
} else if (Year ==1 && (Day !=0 || Hour !=0 || Min !=0 || Sec !=0)){
    strYear = `${Year} year, `;
}else if (Year >1 && (Day ==0 && Hour ==0 && Min ==0 && Sec ==0)){
    strYear = `${Year} years`;
} else strYear = `${Year} year`;

if (Year+Day+Hour+Min+Sec == 0){
    return "now";
} else return strYear+strDay+strHour+strMin+strSec;
}

console.log(formatDuration (132030240));
