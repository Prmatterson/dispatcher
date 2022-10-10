const techNumbers = ["Tech 1", "Tech 2", "Tech 3"];

const timeTableDictHeader = ["Time"];

for (let i_tech = 0; i_tech < techNumbers.length; i_tech++) {
  timeTableDictHeader.push(techNumbers[i_tech]);
}

// Function to Create Main Table Structure
const timeTableDict = {};
const initialHour = 8;
const endHour = 16;

const techIdGenerator = (oldTechName) => {
  const techID = oldTechName.toLowerCase().replace(/\s+/g, "");
  return techID;
};

function hourFormatGenerator(hour, minutes) {
  hourFormat = (hour < 10) ? `0${hour}` : `${hour}`;
  minFormat = (minutes < 10) ? `0${minutes}` : `${minutes}`;
  timeSlotKey = hourFormat + minFormat;
  return timeSlotKey;
}

function reversedHourFormatGenerator(timeSlotKey) {
  const hours = Number(timeSlotKey.substring(0, 2));
  const minutes = Number(timeSlotKey.substring(2, 4));
  return {"hours": hours, "minutes": minutes};
}

for (let i_h = initialHour; i_h <= endHour; i_h++) {
  for (let i_m = 0; i_m < 60; i_m += 6) {
    timeSlotKey = hourFormatGenerator(i_h, i_m);

    timeTableDict[timeSlotKey] = {};

    for (let i_tech = 0; i_tech < techNumbers.length; i_tech++) {
      const techID = techIdGenerator(techNumbers[i_tech]);
      timeTableDict[timeSlotKey][techID] = "-";
    }

    // timeTableDict[timeSlotKey] = { "tech1": "-", "tech2": "-", "tech3": "-" }
  }
}

// Function to Populate Menu Times for Duration in Modals
const possibleDurations = [];
const lowestTime = .1;
const highestTime = 8.0;

for (let i_t = lowestTime; i_t <= highestTime; i_t += .1) {
  possibleDurations.push(Number.parseFloat(i_t).toFixed(1)); // possibleTimesDict.put(i_t)?
}
possibleDurations.sort();


// Function to Add RO when hitting submit button in Add Repair Order Modal
addROFunction = (orderPayload) => {
  console.log("Modifying Promised Time.");
  timeTableDict[orderPayload.promiseTime][orderPayload.tech] = orderPayload.jobDescription;

  for (let i_d = 0; i_d < orderPayload.duration; i_d += .1) {
    console.log("Going back from promised time by ", i_d);
    const timeObj = reversedHourFormatGenerator(orderPayload.promiseTime);
    const hours = timeObj["hours"];
    const minutes = timeObj["minutes"];
    const totalPromisetimeInMinutes = (hours * 60) + minutes;
    const stepBeforePromiseTimeInMinutes = totalPromisetimeInMinutes - (i_d * 60);
    console.log("hours", hours, "minutes", minutes, "totalPromisetimeInMinutes", totalPromisetimeInMinutes, "stepBeforePromiseTimeInMinutes", stepBeforePromiseTimeInMinutes);

    const newHours = Math.floor(stepBeforePromiseTimeInMinutes / 60);
    const newMinutes = Math.round(stepBeforePromiseTimeInMinutes - (newHours * 60));

    if (newHours < 8) {
      break;
    }

    const newTimeSlotKey = hourFormatGenerator(newHours, newMinutes);
    console.log("newHours", newHours, "newMinutes", newMinutes, "NewTimeSlotKey", newTimeSlotKey, newHours, newMinutes);
    // write orderPayload.jobDescription in number of cells above the prommiseTime cell equal to the duration
    timeTableDict[newTimeSlotKey][orderPayload.tech] = orderPayload.jobDescription;
  }
  console.log("Successfully added an RO!");
};


module.exports = {
  "timeTableDictHeader": timeTableDictHeader,
  "timeTableDict": timeTableDict,
  "addROFunction": addROFunction,
  "possibleDurations": possibleDurations,
};
