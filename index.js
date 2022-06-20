let rows = [ // Learn more about 2D arrays
    ["Time", "Tech 1", "Tech 2", "Tech 3"],
    [8.0, "", "", ""], 
    [8.1, "", "", ""], 
    [8.2, "", "", ""], 
    [8.3, "", "", ""]
];


//LEARN ABOUT FUNCTIONS
//let newTable1 = createTable("table-id-name-1", content_2d_array);
//let newTable2 = createTable("table-id-name-2", content_2d_array);
//let newTable3 = createTable("table-id-name-3", content_2d_array);
// function createTable(tableId, table2dArrContent){
//     let tableObj = document.createElement("table"); 
//     //Create table using for loops
//     return tableObj;
// }

//Create table
let jobTable = document.createElement("table"); // html object <table><table/>
// let myContiner = document.createElement("p"); // html object <p><p/>
// let myTable = document.createElement("div"); // html object <div><div/>
// let myTable = document.createElement("h1"); // html object <h1><h1/>



for (let row_index = 0; row_index < rows.length; row_index++) {
    // Go through each of the rows
    // Extract each row array
    const single_row_content = rows[row_index];
    // Create row
    let row = jobTable.insertRow();

    for (let column_index = 0; column_index < single_row_content.length; column_index++) {
        // Go through each of the cells
        // Extract the cell content from the row array 
        const single_cell_content = single_row_content[column_index];
        // Create cell
        let cell = row.insertCell();
        // Add the cell content to cell object
        cell.innerHTML = single_cell_content;
        // Click event
        cell.onclick = function(){
            let log_msg = "The content is "+ single_cell_content;
            // alert(log_msg); // Creates a popup
            console.log(cell); // Sends content to the debug viewer
        }
    } 
}
//Assign the table JS object to the html object
document.getElementById("job-table").appendChild(jobTable);
