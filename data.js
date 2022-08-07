let timeTableDictHeader = ["Time", "Tech 1", "Tech 2", "Tech 3", "Tech 4", "Tech 5", "Tech 6", "Tech 7", "Tech 8", "Tech 9"];

let timeTableDict = {}
let initialHour = 8;
let endHour = 16;
for (let i_h = initialHour; i_h <= endHour; i_h++) {
    for (let i_m = 0; i_m < 60; i_m+=6) {
      hourFormat = (i_h < 10) ? `0${i_h}` : `${i_h}`;
      minFormat  = (i_m < 10) ? `0${i_m}` : `${i_m}`;
      timeFormat = hourFormat + minFormat;
    } 
} 

Object.entries(timeTableDict).forEach(([keyHour, allTechData]) => { //e.g. key = 08000 value = {"tech1": "...", "tech2": ""}
    timeTableDict[keyHour] = {"tech1": "", "tech2": ""}
});

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