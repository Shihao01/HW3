// •	Have a property to hold the movie title (this is set when the constructor is called)
//•	Have a property to hold the rating (this is set when the constructor is called)
//•	Have a method to validate if the two fields are valid. (the title field is not empty, and the rating is an integer between 1 and 5). It returns true or false, it does not use an Alert.
//•	Have a .toString() method that returns this objects title and rating as a single string

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
       
            
// property to hold movie title and rating 
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
    
