const timeTableHeader = ["Time", "Tech 1", "Tech 2", "Tech 3", "Tech 4", "Tech 5", "Tech 6", "Tech 7", "Tech 8", "Tech 9"];

let timeTableDict = {}
let initialHour = 8;
let endHour = 16;
for (let i_h = initialHour; i_h <= endHour; i_h++) {
    for (let i_m = 0; i_m < 60; i_m+=6) {
      hourFormat = (i_h < 10) ? `0${i_h}` : `${i_h}`;
      minFormat  = (i_m < 10) ? `0${i_m}` : `${i_m}`;
      timeFormat = hourFormat + minFormat;
      console.log(timeFormat);
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

const timeTable = [
    [`8:00`, "Job 1", "No Job", "Job 2", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [`8:06`, "Job 1", "Job 4", "Job 3", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"], 
    [`8:12`, "Job 1", "Job 4", "Job 3", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [`8:18`, "Job 1", "Job 4", "Job 7", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [`8:24`, "Job 5", "Job 6", "Job 7", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [`8:30`, "Job 5", "Job 6", "Job 8", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [`8:36`, "Job 9", "Job 6", "Job 8", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [`8:42`, "Job 9", "Job 6", "Job 8", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [`8:48`, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [`8:54`, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [`9:00`, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [9.1, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [9.2, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [9.3, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [9.4, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [9.5, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [9.6, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [9.7, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [9.8, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [9.9, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [10.0, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [10.1, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [10.2, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [10.3, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [10.4, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [10.6, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [10.7, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [10.8, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [10.9, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [11.0, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [11.1, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [11.2, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [11.3, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [11.4, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [11.5, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [11.6, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [11.7, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [11.8, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [11.9, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [12.0, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [12.1, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [12.2, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [12.3, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [12.4, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [12.5, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [12.6, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [12.7, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [12.8, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [12.9, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [13.0, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [13.1, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [13.2, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [13.3, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [13.4, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [13.5, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [13.6, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [13.7, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [13.8, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [13.9, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [14.0, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [14.1, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [14.2, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [14.3, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [14.4, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [14.5, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [14.6, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [14.7, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [14.8, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [14.9, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [15.0, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [15.1, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [15.2, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [15.3, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [15.4, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [15.5, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [15.6, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [15.7, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [15.8, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [15.9, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [16.0, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [16.1, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [16.2, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [16.3, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
    [16.4, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"]
];

module.exports = {
    "timeTableHeader": timeTableHeader,
    "timeTable": timeTable,
}