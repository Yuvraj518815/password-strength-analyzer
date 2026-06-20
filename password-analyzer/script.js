function checkStrength() {
    let password = document.getElementById("password").value;
    let strength = 0;

    if (password.length >= 8) strength++;
    if (password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[@$!%*?&]/)) strength++;

    let result = document.getElementById("result");

    if (strength == 0) {
        result.innerText = "";
    }
    else if (strength <= 2) {
        result.innerText = "Weak Password";
        result.style.color = "red";
    }
    else if (strength == 3) {
        result.innerText = "Medium Password";
        result.style.color = "orange";
    }
    else {
        result.innerText = "Strong Password";
        result.style.color = "green";
    }
}