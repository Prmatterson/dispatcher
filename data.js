let timeTableDictHeader = ["Time", "Tech 1", "Tech 2", "Tech 3"];

let timeTableDict = {}
let initialHour = 8;
let endHour = 16;

for (let i_h = initialHour; i_h <= endHour; i_h++) {
    for (let i_m = 0; i_m < 60; i_m+=6) {
      hourFormat = (i_h < 10) ? `0${i_h}` : `${i_h}`;
      minFormat  = (i_m < 10) ? `0${i_m}` : `${i_m}`;
      timeSlotKey = hourFormat + minFormat;

      timeTableDict[timeSlotKey] = {"tech1": "-", "tech2": "-"}
    } 
} 
console.log("From Data.js", timeTableDictHeader);
// Homework
// 1. Commit this change
// 2. Create another branch
// 3. In this branch you are going to change from timeTable to timeTableDict
// 4. pass timeTableDict from the server to the frontend
// 5. Fix the EJS template to use dictionary/object/map using key value pairs instead of arrays

module.exports = {
    "timeTableDictHeader": timeTableDictHeader,
    "timeTableDict": timeTableDict,
}


//EXAMPLE EDIT DATA
//timeTable["0800"]["tech1"] = "saohdausidhiud"