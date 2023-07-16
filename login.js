const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username, password)

    if(authenticated){
        alert("Username and password are correct")
    } else{
        alert("Username or password are incorrect. Please try again.")
    }
})

// function for checking username and password

function authentication(username,password){
    if(username === "admin" && "password" === "password"){
        return true
    } else {
        false
    }
}