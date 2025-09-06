let signUpArray = []

function signUpBtn() {
    if (pLastName.value === '' || pFirstName.value === '' || signUpEmail.value === '' || signUpPassword.value === '') {
        alert('please fill all details')
    } else {
        let lName = pLastName.value
        let fName = pFirstName.value
        let sEmail = signUpEmail.value
        let sPassword = signUpPassword.value
    
        let signUpDetails = { lastName: lName, firstName: fName, email: sEmail, Password: sPassword }
    
        signUpArray.push(signUpDetails)
        localStorage.setItem('sign-up', JSON.stringify(signUpArray))
    
        pLastName = ''
        pFirstName = ''
        signUpEmail = ''
        signUpPassword = ''
        
        window.location.href = 'sign-in.html'
    }
}