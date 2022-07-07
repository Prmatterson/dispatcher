// =function cellOnClick(cellContent) {
//     let logMsg = "The content is " + cellContent;
//     alert(logMsg); // Creates a popup
//     console.log(cellObj); // Sends content to the debug viewer
//}


function createHeader(tableHeaderData, tableObj) {
    let headerRowObj = tableObj.insertRow();
    for (let i = 0; i < tableHeaderData.length; i++) {
        let headerCell = document.createElement("TH");
        headerCell.innerHTML = tableHeaderData[i];
        headerRowObj.appendChild(headerCell);
    }
}

function createRow(tableObj, tableData) {
    for (let row_index = 0; row_index < tableData.length; row_index++) {
        createCell(tableObj, tableData, row_index);
    }
}

function createCell(tableObj, tableData, row_index) {
    // Go through each of the rows
    // Extract each row array
    let singleRowContent = tableData[row_index];
    //Create row
    let rowObj = tableObj.insertRow();

    for (let columnIndex = 0; columnIndex < singleRowContent.length; columnIndex++) {
        // Go through each of the cells
        // Extract the cell content from the row array
        let singleCellContent = singleRowContent[columnIndex];
        // Create cell
        let cellObj = rowObj.insertCell();
        cellObj.style.width = '8vw';
        // Add the cell content to cell object
        cellObj.innerHTML = singleCellContent;
        //Click event (active function cellOnClick along with below line)
        //cellObj.onclick = cellOnClick
    }
}

function createTable(tableData, tableHeaderData, tableId) {
    let tableObj = document.createElement("table"); // HTML object <table><table/>
    createHeader(tableHeaderData, tableObj);
    createRow(tableObj, tableData);
    //Assign the table JS object to the HTML object
    document.getElementById(tableId).appendChild(tableObj);
    return tableObj;
}

let tableHeaderData1 = ["Time", "Tech 1", "Tech 2", "Tech 3", "Tech 4", "Tech 5", "Tech 6", "Tech 7", "Tech 8", "Tech 9"];
let tableData1 = [
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
createTable(tableData1, tableHeaderData1, "test-table");

function onReady (createTable){

}
// Function to Create Repair Order when Submit Button Pressed in Add Repair Order Modal
$(document).ready(function () {
    $("#add-repair-order-submit-button").click(function () {
        // console.log below is a placeholder until function is created - basic structure of this function is tested and confirmed to work
        console.log(`Test`);
    });
});

// Makes sure to not load any Javascript until HTML/CSS fully loaded
document.addEventListener("DOMContentLoaded", onReady);
