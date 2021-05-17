let btnget = document.querySelector('button');
let mytable = document.querySelector('#table');

btnget.style.height ="50px";
btnget.style.width = "75px";
btnget.style.backgroundColor="yellow";

btnget.addEventListener('click',(e) => {  

function createTable(tableData) {
   var p=1;
   var table = document.createElement('table');
   var tableBody = document.createElement('tbody');
 
   tableData.forEach(function(rowData) {
     var row = document.createElement('tr');
      
     rowData.forEach(function(cellData) {
       var cell = document.createElement('td');
       cell.appendChild(document.createTextNode(cellData));
       row.appendChild(cell);

       cell.setAttribute("id",p);

       

       if(cellData===0)

       {
           cell.style.backgroundColor='red';
           cell.style.color="white";
       }

       else if(cellData===1)
       {
        cell.style.backgroundColor='orange';
        cell.style.color="white";
       }

       else if(cellData===2)
       {
        cell.style.backgroundColor='blue';
        cell.style.color="white";
       }

       else if(cellData===3)
       {
        cell.style.backgroundColor='green';
        cell.style.color="white";
       }
       p=p+1;
        
     });

     
 
     tableBody.appendChild(row);
   });
 
   table.appendChild(tableBody);
   document.body.appendChild(table);
 }

 
 
 ar = [[3, 2, 1, 1,1,1,1,1], [1,1,1,1,1,1,0,0], [1,0,0,1,1,0,1,1],[1,2,2,2,2,0,1,0],[1, 1, 1, 2, 2, 0, 1, 0],[1, 1, 1, 2, 2, 2, 2, 0],[1, 1, 1, 1, 1, 2, 1, 1],[1, 1, 1, 1, 1, 2, 2, 1]];
 createTable(ar);



 //});

 function floodFill( ar, x, y,  currColor,  newColor) 
   { 
       // Base cases 
       if (x < 0 || x >= 8 || y < 0 || y >= 8) 
           return; 
       if (ar[x][y] != currColor) 
           return; 
       if (ar[x][y] != currColor) 
           return; 
             
       // Replace the color at cell (x, y) 
       ar[x][y] = newColor; 
  

       // Recursively call for north, east, south and west 
       floodFill(ar, x+1, y, currColor, newColor); 
       floodFill(ar, x-1, y, currColor, newColor); 
       floodFill(ar, x, y+1, currColor, newColor); 
       floodFill(ar, x, y-1, currColor, newColor); 
   } 
     



let btn = document.createElement("button");
btn.innerHTML = "Change Colors !!!";
document.body.appendChild(btn);
//btn.style.marginLeft ="190px";
btn.style.marginTop = "30px";
btn.style.height= "50px";
btn.style.backgroundColor= "yellow";

floodFill(ar,4,4,2,3);


btn.addEventListener('click',() =>{

    

 //  ar = [[3, 2, 1, 1,1,1,1,1], [1,1,1,1,1,1,0,0], [1,0,0,1,1,0,1,1],[1,2,2,2,2,0,1,0],[1, 1, 1, 2, 2, 0, 1, 0],[1, 1, 1, 2, 2, 2, 2, 0],[1, 1, 1, 1, 1, 2, 1, 1],[1, 1, 1, 1, 1, 2, 2, 1]];
   
   
   
 


var q=1; var inp;
for(var i=0;i<8;i++)
{
for(var j=0;j<8;j++)
{
    inp = document.getElementById(q);
    if(ar[i][j]===3)
    {
       inp.style.backgroundColor='green';
       inp.innerHTML="3";
    }
    
    q=q+1;
}

}

 
 })

 
});

 









