

getData();
async function getData() {
    const response = await fetch("ZonAnn.Ts+dSST.csv")
    const data = await response.text()
    // console.log(data); 


    const tableData = data.split("\n");

    console.log(tableData);

    // length of the array 
    let tableLength = tableData.length;
    console.log(tableLength);

    
    // DOM reference to table
    const tbl_ele = document.querySelector("table");


    // top row with categories 
    let topRow = [];
    const topRowTh = document.createElement("th"); 
    // topRowTh.append()

    tableData.slice(0, 14)


    // first column with years

   

    tableData.forEach(row => {
        let wholeData = row.split(",");
        console.log(wholeData); 
    })








    // Creating Table , trying to create based on array length for rows and cells 

    // let table_ele = document.createElement('table');
    // let tr, td, row, cell;

    // for (row = 0; row < 15; row++) {


    //     tr = document.createElement('tr');

    //     for (cell = 0; cell < 22; cell++) {
    //         td = document.createElement('td');

    //         tr.appendChild(tableData);
    //         td.innerHTML = row * 22 + cell + 1;
    //     }
    //     table_ele.appendChild(tr);
    // }
    // document.getElementById('datatable-one').appendChild(tableData);
}