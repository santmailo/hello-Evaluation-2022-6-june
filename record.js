// fill in javascript code here
document.querySelector("form").addEventListener("submit",fill);
function fill(event){
    event.preventDefault();
    let xp = +document.querySelector("#exp").value;
    
    function ji(xp){
        let pad = "";
        if(xp>5){
            return "Senior";
        }
    
        else if(xp>2 && xp<5){
            return "Junior";
        }
    
        else if(xp<=1){
            return "Fresher";
        }
    }
    
    var tableBody = document.querySelector("tbody");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");  
    var td7 = document.createElement("td");
    var td8 = document.createElement("td");     
    var row = document.createElement("tr");

    td1.innerText = document.querySelector("#name").value;
    td2.innerText = document.querySelector("#employeeID").value;
    td3.innerText = document.querySelector("#department").value;
    td4.innerText = xp;
    td5.innerText = document.querySelector("#email").value;
    td6.innerText = document.querySelector("#mbl").value;
    td7.innerText = ji(xp);
    td8.innerText = "Delete";

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);
    row.appendChild(td6);
    row.appendChild(td7);
    row.appendChild(td8);

    tableBody.appendChild(row); 
    
}