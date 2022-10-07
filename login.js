document.addEventListener("DOMContentLoaded", function () {
    checkLoggedIn();

    document.getElementById("login").addEventListener("submit", function(event) {
        event.preventDefault()

        const email = document.getElementById("email_input").value
        const password = document.getElementById("password_input").value
        const login = {email: email, password: password}

        fetch("http://127.0.0.1:3000/auth/cookie/login", {
            method: `POST`,
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(login)
        })
    })
})

function checkLoggedIn() {
    const elementWhenLoggedIn = document.getElementById("loggedIn")
    const elementWhenNotLoggedIn = document.getElementById("notLoggedIn")

    fetch("http://127.0.0.1:3000/auth/cookie/status", {
        credentials: "include"
    }).then(function(response) {
        console.log(response)
        if (response.status === 401) {
            elementWhenLoggedIn.classList.add("hidden")
            elementWhenNotLoggedIn.classList.remove("hidden")
        } else {
            elementWhenLoggedIn.classList.remove("hidden")
            elementWhenNotLoggedIn.classList.add("hidden")
        }
    })
}