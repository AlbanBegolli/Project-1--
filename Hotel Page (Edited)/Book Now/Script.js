function saveClient()
{
    var CheckIn=document.getElementById("CheckIn").value;
    var CheckOut=document.getElementById("CheckOut").value;
    var Adults = document.getElementById("Adults").value;
    var Children=document.getElementById("Children").value;
    var Email = document.getElementById("email").value;

    var Client={
         CheckIn:CheckIn,
         CheckOut:CheckOut,
         Adults:Adults,
         Children:Children,
         Email:Email
    }

    var Clientsfromdb=JSON.parse(localStorage.getItem("Book Info"));
    if(Clientsfromdb==null)
    {
        var blankClients=[];
        localStorage.setItem("Book Info",JSON.stringify(blankClients));

        Clientsfromdb=JSON.parse(localStorage.getItem("Book Info"));

        Clientsfromdb.push(Client);
        localStorage.setItem("Book Info",JSON.stringify(Clientsfromdb)); 
    }
    else
    {
        Clientsfromdb.push(Client);
        localStorage.setItem("Book Info",JSON.stringify(Clientsfromdb)); 
    }

    alert("View Results Button ");

}

var Clientsfromdb=JSON.parse(localStorage.getItem("Book Info"));

var html = "<table border='1|1'><tr><th>CheckIn</th><th>CheckOut</th><th>Adults</th><th>Children</th><th>Email</th></tr>";
for (var i = 0; i < Clientsfromdb.length; i++)
 {
    html+="<tr>";
    html+="<td>"+Clientsfromdb[i].CheckIn+"</td>";
    html+="<td>"+Clientsfromdb[i].CheckOut+"</td>";
    html+="<td>"+Clientsfromdb[i].Adults+"</td>";
    html+="<td>"+Clientsfromdb[i].Children+"</td>";
    html+="<td>"+Clientsfromdb[i].Email+"</td>";
    html+="</tr>";
    }
    html+="</table>";
    document.getElementById("box10").innerHTML += html;
    //This will append the new table to the existing table on the page
    
    
    //call the function on page load
    window.onload = function() {
    displayTable();
    }
    
    //call the function on button click to refresh the table
    document.getElementById("viewButton").onclick = function() {
    displayTable();
    }
