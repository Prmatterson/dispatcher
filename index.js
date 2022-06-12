// Creating a Dynamic Table (copied example from https://stackoverflow.com/questions/14643617/create-table-using-javascript)

function tableCreate() {
    const body = document.body,
          tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.style.border = '1px solid black';
    tbl.style.height = '2000px';
  
    // Table structure

    for (let i = 0; i < 85; i++) {
      const tr = tbl.insertRow();
      for (let j = 0; j < 9; j++) {
        if (i === 86 && j === 9) {
          break;
        } else {
          const td = tr.insertCell();
          td.appendChild(document.createTextNode(""));
          td.style.border = '1px solid black';
          if (i >= 0 && i <= 86 && j >= 0 && j <= 9) {
            td.setAttribute('rowSpan', '1');
          }
        }
      }
    }
    body.appendChild(tbl);
  }
  
  tableCreate();

  // Iterated Array Test

  const N = 86;
  const arr = Array.from({length: N}, (_, index) => index + 1);
  console.log(arr);