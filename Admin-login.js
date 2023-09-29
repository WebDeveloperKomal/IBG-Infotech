const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const email = form.email.value
    const password = form.password.value

    const authenticated = authentication(email, password)

    if (authenticated) {
        window.location.href = "AdminPanel.html"
    } else {
        alert("Invalid Email or Password")
    }
})


function authentication(email, password) {
    if (email === "admin@gmail.com" && password === "admin") {
        return true
    } else {
        return false
    }
}



// *****************************************************************

