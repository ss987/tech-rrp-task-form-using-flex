console.log("Hello from my script!");

function checkInputs() {
    const input1 = document.getElementById("password");
    const input2 = document.getElementById("confirm");
    var checkboxChecked = document.getElementById("checkbox").checked;
    
    
    if (input1.value !== input2.value) {
        alert("Passwords do not match!");
    } else {
      
      if (checkboxChecked) {
        
        var welcomeDiv = document.getElementById("welcome");
        welcomeDiv.innerHTML = "Account created successfully";
      } else {
        
        alert("Kindly accept the terms and conditions");
      }
    }
    
  }
  checkInputs();
