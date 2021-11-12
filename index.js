function openPage(pageName) {
    if(pageName=='student'){
      document.getElementById('student').style.display = "block";
      document.getElementById('admin').style.display = "none";
    }
    else if(pageName=='admin'){
      document.getElementById('student').style.display = "none";
      document.getElementById('admin').style.display = "block";
    }
  }
  
  //Get the input field
  var input = document.getElementById("mypass");
  
  // Get the warning text
  var text = document.getElementById("Wtext");
  
  // When the user presses any key on the keyboard, run the function
  input.addEventListener("keyup", function(event) {
  
    // If "caps lock" is pressed, display the warning text
    if (event.getModifierState("CapsLock")) {
      text.style.display = "block";
    } else {
      text.style.display = "none"
    }
  });