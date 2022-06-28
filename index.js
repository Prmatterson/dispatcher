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
        // Add the cell content to cell object
        cellObj.innerHTML = singleCellContent;
        //Click event (active function cellOnClick along with below line)
        //cellObj.onclick = cellOnClick
    }
}

function createTable(tableData, tableHeaderData, tableId) {
    let tableObj = document.createElement("table"); // html object <table><table/>
    createHeader(tableHeaderData, tableObj);
    createRow(tableObj, tableData);
    //Assign the table JS object to the html object
    document.getElementById(tableId).appendChild(tableObj);
    return tableObj;
}

function onReady() {
    let tableHeaderData1 = ["Time", "Tech 1", "Tech 2", "Tech 3", "Tech 4", "Tech 5", "Tech 6", "Tech 7", "Tech 8", "Tech 9"];
    let tableData1 = [
        [8.0, "Job 1", "No Job", "Job 2", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"], 
        [8.1, "Job 1", "Job 4", "Job 3", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
        [8.2, "Job 1", "Job 4", "Job 3", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
        [8.3, "Job 1", "Job 4", "Job 7", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
        [8.4, "Job 5", "Job 6", "Job 7", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
        [8.5, "Job 5", "Job 6", "Job 8", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
        [8.6, "Job 9", "Job 6", "Job 8", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
        [8.7, "Job 9", "Job 6", "Job 8", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
        [8.8, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
        [8.9, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
        [9.0, "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job", "No Job"],
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
        // As soon as the more lines are included in the table, it no longer shows on the loaded webpage - it seems as if adding one more array to the parent-array causes the issue
    ];
    createTable(tableData1, tableHeaderData1, "test-table");
}


document.addEventListener("DOMContentLoaded", onReady);

