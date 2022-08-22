let techNumbers = ["Tech 1", "Tech 2", "Tech 3"]

let timeTableDictHeader = ["Time"];

for (let i_tech = 0; i_tech < techNumbers.length; i_tech++) {
  timeTableDictHeader.push(techNumbers[i_tech]);
};

// Function to Create Main Table Structure
let timeTableDict = {}
let initialHour = 8;
let endHour = 16;

let techIdGenerator = (oldTechName) => {
  let techID = oldTechName.toLowerCase().replace(/\s+/g, '');
  return techID;
};

for (let i_h = initialHour; i_h <= endHour; i_h++) {
  for (let i_m = 0; i_m < 60; i_m += 6) {
    hourFormat = (i_h < 10) ? `0${i_h}` : `${i_h}`;
    minFormat = (i_m < 10) ? `0${i_m}` : `${i_m}`;
    timeSlotKey = hourFormat + minFormat;

    timeTableDict[timeSlotKey] = {}
    
    for (let i_tech = 0; i_tech < techNumbers.length; i_tech++) {
      let techID = techIdGenerator(techNumbers[i_tech]);
      timeTableDict[timeSlotKey][techID] = "-";
    };

    // timeTableDict[timeSlotKey] = { "tech1": "-", "tech2": "-", "tech3": "-" }
  };
};

// Function to Populate Menu Times for Duration in Modals
console.log("From Data.js", timeTableDictHeader);

let possibleDurations = []
let lowestTime = .1
for (let i_t = lowestTime; i_t <= 8.0; i_t += .1) {
  possibleDurations.push(Number.parseFloat(i_t).toFixed(1)); // possibleTimesDict.put(i_t)?
};
possibleDurations.sort();

//EXAMPLE EDIT DATA
//timeTable["0800"]["tech1"] = "saohdausidhiud"

// Function to Add RO when hitting submit button in Add Repair Order Modal
addROFunction = (orderPayload) => {
  // data.timeTable["0800"]["tech1"] = "saohdausidhiud";
  timeTableDict[orderPayload.promiseTime][orderPayload.tech] = orderPayload.jobDescription;
  
  for(let i_t = orderPayload.duration; i_t >= 0; i_t -= .1){
    // put in reverse loop to select multiple rows within column
  }

  console.log(`Successfully added an RO!`)
}

module.exports = {
  "timeTableDictHeader": timeTableDictHeader,
  "timeTableDict": timeTableDict,
  "addROFunction": addROFunction,
  "possibleDurations": possibleDurations,
  "addROFunction": addROFunction,
}
