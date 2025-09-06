
function signInBtn() {
    // Get entered email and password
    let sEmail = signInEmail.value;
    let sPassword = signInPassword.value;

    // Get stored sign-up data (or empty array if nothing stored)
    let storedUsers = JSON.parse(localStorage.getItem('sign-up')) || [];

    // Loop through each user and check if email and password match
    for (let i = 0; i < storedUsers.length; i++) {
        if (storedUsers[i].email === sEmail && storedUsers[i].Password === sPassword) {
            // If match found, go to dashboard
            window.location.href = 'dashboard.html';
        } else {
            showP.innerHTML = `Email or password is incorrect. Please try again.`
            // alert('Email or password is incorrect. Please try again.');
        }
    }

}