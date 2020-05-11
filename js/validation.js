function validation() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var text = document.getElementById('text').value;
    if (name == '' || email == '' || subject == '' || text == '') {
        alert("All Fields must be Filled");
        return false;
    } else {
        alert("Thank You for Your Message with" + "\n name: " + name + "\n email: " + email + "\n subject: " + subject + "\n message: " + text);
        return true;
    }
}

