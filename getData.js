getData();

async function getData() {
    const response = await fetch("ZonAnn.Ts+dSST.csv")
    const data = await response.text()
    // console.log(data); 

    const table = data.split("\n");
    console.log("DATA TABLE: ", table);
    console.log("--------------------------------");
    // let tableEle = document.createElement("table");
    
    table.forEach(row => {

        let column_one = []; 

        const wholeData = row.split(","); 
        // console.log(wholeData); 
        let headerRow = document.createElement("th");
        
        
        const years = wholeData[0]; 
        const td_cells = wholeData[1]; 
    
        console.log(years); 
        // const columns = row.split(",");
        // const year = columns[0];
        // xLabels.push(year);
        // const temp = columns[1];    
    });
}