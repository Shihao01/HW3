//two button's event 
  function addmoive()
            {
                // get the table by id
                // create a new row and cells
                // get value from input text
                // set the values into row cell's
                if(!checkEmptyInput()){
                var newRow = table.insertRow(table.length),
                    cell1 = newRow.insertCell(0),
                    cell2 = newRow.insertCell(1);
                    
                    moviename = document.getElementById("moviename").value,
                    rating = document.getElementById("rating").value,
                    
            
                cell1.innerHTML = moviename;
                cell2.innerHTML = rating;
                
                // call the function to set the event to the new row
                selectedRowToInput();
            }
            }
// add Movie title Name and rating 
 function checkEmptyInput()
            {
                var isEmpty = false,
                    fname = document.getElementById("moviename").value,
                    lname = document.getElementById("rating").value;
                    
            
                if(moviename === ""){
                    alert("moviename Connot Be Empty");
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
    

var rIndex,
                table = document.getElementById("table");
 function removemoive()
            {
                table.deleteRow(rIndex);
                // clear input text
                document.getElementById("moviename").value = "";
                document.getElementById("rating").value = "";
                
            }
// remove data not need 


