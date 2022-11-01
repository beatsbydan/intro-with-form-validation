//Form validation
//requirements
const submit = document.getElementById("submit")
const firstName = document.getElementById("firstname")
const lastName = document.getElementById("lastname")
const email = document.getElementById("email")
const password = document.getElementById("password")
const regexMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//setting the error message
const setError = (id, message) => {
    let errorMsg = document.createElement("em")
    errorMsg.innerHTML = message;
    id.style.borderColor = 'hsl(0, 100%, 74%)'
    id.parentElement.appendChild(errorMsg)
}

//set success
const setSuccess = (id) => {
    id.style.borderColor = "hsl(154, 59%, 51%)"
}

//eventlistener for the submit button
submit.addEventListener("click", (e) => {
    e.preventDefault()
    if(firstName.value === ""){
        setError(firstName, "Firstname cannot be empty")
    }
    else{
        setSuccess(firstName)
    }
    if(lastName.value === ""){
        setError(lastName, "Lastname cannot be empty")
    }
    else{
        setSuccess(lastName)
    }
    if(email.value.match(regexMail)){
        setSuccess(email)
    }
    else if(email.value === ""){
        setError(email, "Email cannot be empty")
    }
    else{
        setError(email, "Looks like this is not an email")
    }
    if(password.value === ""){
        setError(password, "Password cannot be empty")
    }
    else{
        setSuccess(password)
    }
})