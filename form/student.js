function compute(){
  var x=0,f=0,g=0;
var a=parseInt(document.getElementById("maths").value);
var b=parseInt(document.getElementById("physics").value);
var c=parseInt(document.getElementById("chem").value);
var d=parseInt(document.getElementById("hindi").value);
var e=parseInt(document.getElementById("history").value);
 f=a+b+c+d+e;
 g=f/5;
if(g<=100&& g>85)
x="A";
else if(g<=85&& g>70)
  x="B";
else if(g<=70 && g>40)
  x="C";
else if(g<=40 && g>33)
  x="D";
else if(g<=33)
  x="E";
document.getElementById('sum').value=f;
document.getElementById('percentage').value=g;
document.getElementById('grade').value=x;
}
function generate_table() {
    var table=document.getElementById("table");
    var row=table.insertRow(1);
    cell1=row.insertCell(0);
    cell2=row.insertCell(1);
    cell3=row.insertCell(2);
    cell4=row.insertCell(3);
    cell5=row.insertCell(4);
    cell6=row.insertCell(5);
    cell7=row.insertCell(6);
    cell8=row.insertCell(7);
      var x=0,f=0,g=0;
var a=parseInt(document.getElementById("maths").value);
var b=parseInt(document.getElementById("physics").value);
var c=parseInt(document.getElementById("chem").value);
var d=parseInt(document.getElementById("hindi").value);
var e=parseInt(document.getElementById("history").value);
 f=a+b+c+d+e;
 g=f/5;
if(g<=100&& g>85)
x="A";
else if(g<=85&& g>70)
  x="B";
else if(g<=70 && g>40)
  x="C";
else if(g<=40 && g>33)
  x="D";
else
  x="E";
cell1.innerHTML=document.getElementById("name").value;
cell2.innerHTML=document.getElementById("branch").value;
cell3.innerHTML=document.getElementById("roll").value;
cell4.innerHTML=f;
cell5.innerHTML=g;
cell6.innerHTML=x;
cell7.innerHTML="<input type='button' value='Edit' onclick='edit(this)'>";
cell8.innerHTML="<input type='button' value='Delete' onclick='rem(this)'>";
}
function edit(x)
{
    var i=x.parentNode.parentNode.rowIndex;
    document.getElementById("name").value=document.getElementById("table").rows[i].cells[0].innerHTML;
    document.getElementById("branch").value=document.getElementById("table").rows[i].cells[1].innerHTML;
    document.getElementById("roll").value=document.getElementById("table").rows[i].cells[2].innerHTML;
    rem(x);
}
function rem(x)
{
    var i=x.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
}