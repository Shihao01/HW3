// •	Have a property to hold the movie title (this is set when the constructor is called)
//•	Have a property to hold the rating (this is set when the constructor is called)
//•	Have a method to validate if the two fields are valid. (the title field is not empty, and the rating is an integer between 1 and 5). It returns true or false, it does not use an Alert.
//•	Have a .toString() method that returns this objects title and rating as a single string


var movie = document.getElementById("movie").value; //a property to hold the movie title
var rating = document.getElementById("rating").value;//a property to hold the rating
testsumbit = "true"; // only run when testsumbit function is true

if ( isNaN(this.rating) ) {
            return false;
        } else if ( this.rating <= 0 || this.rating > 5 ) {
            return false;
          } else if ( this.title == "" ) {
              return false;
        } else {
            return true;
        }// a method to validate  if the two fields are valid 
    
var MS = movielist ; 
var ML = MS.toString();//  .toString() method that returns this objects title and rating as a single string
