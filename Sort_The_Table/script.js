// function sortTable(){
//     console.log("fggfhhgjhdssdfgbnm,");
//     let table = document.getElementById("mytable");
//     let switching = true;

//     while(switching){
//         switching = false;
//         let rows = table.rows;
//         for(let i=1;i<rows.length-1;i++)
//         {
//             let currentcell  = rows[i].getElementsByTagName("TD")[0];
//             let nextcell = rows[i+1].getElementsByTagName("TD")[0];
//             if (currentcell.innerHTML.toLowerCase() > nextcell.innerHTML.toLowerCase()) {
//                 // If the current cell is greater, switch the rows
//                 rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//                 switching = true; // A switch has been made
//                 break; // Exit the loop to start again
//             }
//         }
//     }
// }

function myclick(){
    let myinput = document.querySelector("#myinput").value.toLowerCase();
    let mytable = document.querySelector("#mytable");
    let rows = mytable.getElementsByTagName("tr");
    for(let i =1;i<rows.length;i++)
    {
        let name = rows[i].getElementsByTagName("td")[0];
        if(name){
            let text = name.textContent.toLowerCase();
            if(text.includes(myinput))
            {
                rows[i].style.display = "";
            }
            else
            {
                rows[i].style.display = "none";
            }
        }
    }
}