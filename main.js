//two button's event 
//first one to sumbit 
 function testsumbit {
	 var x = document.forms["my-form"]["movie"]; 
	 var y = document.forms["my-form"]["rating"];
	 
	 if (x.value == "")
	 {
		 alert('enter a movie name'); 
		 return false; 
	 } Blockquote
	 if (y.value == "")
	 {
		 alert('enter a rating');
		 return false;		 
	 }
 retur true ; }
 
 function submit{
		 if (testsumbit) 
		 {
		 document.forms["my-form"].save; // first save data 
         document.forms["my-form"].clear;// then clear it 
		 }
		 
	 }
	 
function save{	 
    movie1 = new movie();
    movie1.title = $("#movie");
    movie1.rating = $("#rating");

    if ( !movie1.isValid() ) {
      alert("Invalid entry");
    } else {
      movielist.push(movie1);
      $("#movie").innerHTML="";
      $("#rating").innerHTML="";
    }
    $("#movie").focus();
  },

  function list {
    $("#movielist").innerHTML = movies.join("<br>");
  }
};
function clear{
document.getElementById("movie").value = ""; 
document.getElementById("rating").value = ""; 
}

