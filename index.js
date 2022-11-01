//Form validation
//requirements
const submit = document.getElementById("submit")
console.log(submit)
const firstName = document.getElementById("firstname")
const lastName = document.getElementById("lastname")
const email = document.getElementById("email")
const password = document.getElementById("password")
const regexMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// const regexPass;
//setting the error message
const setError = (id, message) => {
    
}

submit.addEventListener("click", () => {
    console.log("Lovely, progrss is being made")
})