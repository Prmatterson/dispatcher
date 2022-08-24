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
let possibleDurations = []
let lowestTime = .1
let highestTime = 8.0

for (let i_t = lowestTime; i_t <= highestTime; i_t += .1) {
  possibleDurations.push(Number.parseFloat(i_t).toFixed(1)); // possibleTimesDict.put(i_t)?
};
possibleDurations.sort();


// Function to Add RO when hitting submit button in Add Repair Order Modal
addROFunction = (orderPayload) => {
  for (let i_d = orderPayload.duration; i_d >= 0; i_d -= .1) {
    // write orderPayload.jobDescription in number of cells above the prommiseTime cell equal to the duration
    timeTableDict[orderPayload.promiseTime - (i_d * 60)][orderPayload.tech] = orderPayload.jobDescription;
  }

  console.log(`Successfully added an RO!`)
 }; 


module.exports = {
  "timeTableDictHeader": timeTableDictHeader,
  "timeTableDict": timeTableDict,
  "addROFunction": addROFunction,
  "possibleDurations": possibleDurations,
}
