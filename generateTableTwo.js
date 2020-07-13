
getData();
async function getData() {
    const response = await fetch("ZonAnn.Ts+dSST.csv")
    const data = await response.text()
    // console.log(data); 


    const table = data.split("\n");
    // console.log("DATA TABLE: ", table);
    console.log("--------------------------------");


    // let tableEle = document.createElement("table");
    let tableLength = table.length;
    console.log(tableLength)
    for (let i = 0; i < tableLength; i++) {

        let val = table[i];
        console.log(val);
        let table_ele = document.querySelector("table");
        let table_column_one = document.createElement("tr");

        table_ele.appendChild(table_column_one);
        table_column_one.append(val);

        if(table_column_one.indexOf === 1){

        }
        table_column_one.style.padding = "20px";
        table_column_one.style.border = "2px solid #000";
        
    }


    // table.forEach(row => {

    //     let column_one = [];

    //     let headerRow = document.createElement("th");

    //     const wholeData = row.split(",");
    //     // console.log(wholeData);


    //     // chunks of the big array to be represented as table rows
    //     const tbl_years = wholeData.slice(0, 1);
    //     const temps = wholeData[1];


    //     // references to table element
    //     let table_ele = document.querySelector("table");
    //     let table_column_one = document.createElement("tr");

    //     table_ele.appendChild(table_column_one);
    //     table_column_one.append(tbl_years);


    //     // let rowLength = wholeData.length;
    //     // console.log(rowLength);
    //     // for (let i = 0; i < rowLength; i++) {

    //     //     let val = wholeData[i];
    //     // }



    // });
}

