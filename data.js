let techNumbers = ["Tech 1", "Tech 2", "Tech 3"]

let timeTableDictHeader = ["Time", techNumbers[0], techNumbers[1], techNumbers[2]];

// Function to Create Main Table Structure
let timeTableDict = {}
let initialHour = 8;
let endHour = 16;

for (let i_h = initialHour; i_h <= endHour; i_h++) {
  for (let i_m = 0; i_m < 60; i_m += 6) {
    hourFormat = (i_h < 10) ? `0${i_h}` : `${i_h}`;
    minFormat = (i_m < 10) ? `0${i_m}` : `${i_m}`;
    timeSlotKey = hourFormat + minFormat;

    timeTableDict[timeSlotKey] = { "tech1": "-", "tech2": "-", "tech3": "-" }
  };
};

// Function to Populate Menu Times for Duration in Modals
console.log("From Data.js", timeTableDictHeader);

let possibleTimesDict = []
let lowestTime = 6;

for (let i_t = lowestTime; i_t <= 480; i_t += 6) {
  possibleTimesDict.push(i_t); // possibleTimesDict.put(i_t)?
};

//EXAMPLE EDIT DATA
//timeTable["0800"]["tech1"] = "saohdausidhiud"

// Function to Add RO when hitting submit button in Add Repair Order Modal
addROFunction = () => {
  let roNumber = document.write(document.getElementById("work-order").value);
  let tech = document.write(document.getElementById("tech").value);
  let promise = document.write(document.getElementById("pronmise-time").value);
  let duration = document.write(document.getElementById("duration").value);
  let description = document.write(document.getElementById("job-description").value);
  let notes = document.write(document.getElementById("ro-note").value);
  // This function should do the following
  // roNumber is written up at the top of the cell(s)
  // tech determines what column the job goes into
  // promise determines the end point of the column
  // duration determines the start point of the column using promise
  // description and notes show up as regular text below roNumber

  // logic would be something like the following
  timeTableDict[promise - duration][tech] = roNumber + description + notes;
  console.log(`Successfully added an RO!`)
}

module.exports = {
  "timeTableDictHeader": timeTableDictHeader,
  "timeTableDict": timeTableDict,
  "possibleTimesDict": possibleTimesDict,
  "addROFunction": addROFunction,
}
