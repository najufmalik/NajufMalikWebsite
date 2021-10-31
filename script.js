/* BIO BUTTON */
var clicked = false;

function displayBio() {
  if(clicked)
  {
    document.getElementById("about").style.display = "none";
  }
  
  else
  {
    document.getElementById("about").style.display = "block";
  }
  clicked = !clicked;
}

