//two button's event 
var rIndex,
                table = document.getElementById("table");

function checkEmptyInput()
            {
                var isEmpty = false,
                    moviename = document.getElementById("moviename").value,
                    rating = document.getElementById("rating").value;
                                
                if(moviename === ""){
                    alert("MovieName Connot Be Empty");
                    isEmpty = true;
                }
                else if(rating <= 0){
                    alert("rating should be between 1-5 Please remove last input");
                    isEmpty = true;
                }
		else if (rating > 5){
		alert("rating should be between 1-5 Please remove last input");
		isEmpty = true;
		}             
                return isEmpty;
            }// a method to validate  if the two fields are valid 

function addmoive()
            {
                if(!checkEmptyInput()){
                var newRow = table.insertRow(table.length),
                    cell1 = newRow.insertCell(0),
                    cell2 = newRow.insertCell(1),                   
                    moviename = document.getElementById("moviename").value,
                    rating = document.getElementById("rating").value;
		    
                cell1.innerHTML = moviename;
                cell2.innerHTML = rating;
                // call the function to set the event to the new row
                selectedRowToInput();
            }            
            }
// add Movie title Name and rating 
  
 function selectedRowToInput()
            {              
                for(var i = 1; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {
                      // get the seected row index
                      rIndex = this.rowIndex;
                      document.getElementById("moviename").value = this.cells[0].innerHTML;
                      document.getElementById("rating").value = this.cells[1].innerHTML;                
                    };
                }
            }
 selectedRowToInput();   
            
// property to hold movie title and rating 
 function removemoive()
            {
                table.deleteRow(rIndex);
                // clear input text
                document.getElementById("moviename").value = "";
                document.getElementById("rating").value = "";               
            }
// remove data not need 


