function createRow(tableObj, tableData) {
    for (let row_index = 0; row_index < tableData.length; row_index++) {
        createCell(tableObj, tableData, row_index);
    }
}

function cellOnClick(cellContent) {
    let logMsg = "The content is " + cellContent;
    alert(logMsg); // Creates a popup
    console.log(cellObj); // Sends content to the debug viewer
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
        //Click event
        cellObj.onclick = cellOnClick
    }
}
function createHeader(tableHeaderData, tableObj) {
    let headerRowObj = tableObj.insertRow();
    for (let i = 0; i < tableHeaderData.length; i++) {
        let headerCell = document.createElement("TH");
        headerCell.innerHTML = tableHeaderData[i];
        headerRowObj.appendChild(headerCell);
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
    let tableHeaderData1 = ["H1", "H2", "H3", "H4"]
    let tableData1 = [
        [1, 4, 6, 6],
        [9, 7, 8, 9]
    ]
    
    let tableHeaderData2 = ["H1", "H2", "H3", "H4"]
    let tableData2 = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12]
    ];

    let tableObj1 = createTable(tableData1, tableHeaderData1, "test-table");
    let tableObj2 = createTable(tableData2, tableHeaderData2, "evens-odds");

}
document.addEventListener("DOMContentLoaded", onReady);