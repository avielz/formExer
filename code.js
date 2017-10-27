function validateForm() {
    var Firstname = document.forms["myForm"]["fname"].value;
    if (Firstname == "") {
        alert("First Name must be filled out");
        return false;
    }
    var Lastname = document.forms["myForm"]["lname"].value;
    if (Lastname == "") {
        alert("Last name must be filled out");
        return false;
    }
    var Pass = document.forms["myForm"]["password"].value;
    if (Pass == "") {
        alert("Password needs at least 8 characters");
        return false;
    }
}