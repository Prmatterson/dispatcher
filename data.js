let techNumbers = ["Tech 1", "Tech 2", "Tech 3"]

let timeTableDictHeader = ["Time", techNumbers[0], techNumbers[1], techNumbers[2]];

let timeTableDict = {}
let initialHour = 8;
let endHour = 16;

for (let i_h = initialHour; i_h <= endHour; i_h++) {
    for (let i_m = 0; i_m < 60; i_m+=6) {
      hourFormat = (i_h < 10) ? `0${i_h}` : `${i_h}`;
      minFormat  = (i_m < 10) ? `0${i_m}` : `${i_m}`;
      timeSlotKey = hourFormat + minFormat;

      timeTableDict[timeSlotKey] = {"tech1": "-", "tech2": "-", "tech3": "-"}
    } 
} 
console.log("From Data.js", timeTableDictHeader);

module.exports = {
    "timeTableDictHeader": timeTableDictHeader,
    "timeTableDict": timeTableDict,
}


//EXAMPLE EDIT DATA
//timeTable["0800"]["tech1"] = "saohdausidhiud"