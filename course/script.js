
document.getElementById("myForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let course = document.getElementById("course").value;

    // Mobile number validation
    //if (!/^\d{10}$/.test(mobile)) {
      //  alert("Enter a valid 10-digit mobile number");
        //return;
    //}

    // Display registration details
    document.getElementById("result").innerHTML =
        "Registration Successful! " +
        "<br>Name: " + name + " | " +
        "<br>Email: " + email + " | " +
        "<br>Mobile: " + mobile + " | " +
        "<br>Course: " + course;

});
