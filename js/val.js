function validation() {
    var a = document.regform.fname.value;
    if (a == "") {
        alert("Please Enter Your Name!");
        document.regform.fname.focus();
        return false;
    }
    if (!isNaN(a)) {
        alert("Please Enter Only Characters for Name");
        document.regform.fname.select();
        return false;
    }
    if ((a.length < 5) || (a.length > 10)) {
        alert("Your Character must be 5 to 15 Character");
        document.regform.fname.select();
        return false;
    }
}