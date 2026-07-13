let email = document.querySelector("#email")
let emailError = document.querySelector("#emailError")

let password = document.querySelector("#password")
let passwordError = document.querySelector("#passwordError")

let form = document.querySelector("form")


form.addEventListener("submit", function (e) {
    e.preventDefault()

    const emailRegex = /^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]{3,}\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#])[A-Za-z\d@$!%*?&.#]{8,}$/;

    let emailAns = emailRegex.test(email.value)
    let passwordAns = passwordRegex.test(password.value)

    if (!emailAns) {
        emailError.style.display = "initial"
    }
    else{
        emailError.style.display = "none"
    }

    // -----------------------------------------
    
    if(!passwordAns){
        passwordError.style.display = "initial"
    }
    else{
        passwordError.style.display = "none"
    }

    if(emailAns && passwordAns){
    email.value = ""
    password.value = ""
    }
})


