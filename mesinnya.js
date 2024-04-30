function checkNumber() {
    var input = document.getElementById("numberInput").value;
    var regex = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/;

    if (regex.test(input)) {
        document.getElementById("result").innerHTML = "Valid scientific number.";
    } else {
        document.getElementById("result").innerHTML = "Invalid scientific number. Please enter a valid scientific number.";
    }
}
