document.addEventListener ("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm")
    
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault()

        xhr = new XMLHttpRequest ()
        xhr.open("GET", "data.json", true)
    
        xhr.onload = function(){
            if (xhr.status === 200) {
                const responseData = JSON.parse(xhr.responseText)
                const username = document.getElementById("username").value
                const password = document.getElementById("password").value
                
                const users = responseData.users

                const foundUser = users.find(user => user.username === username && user.password === password)

                if (foundUser !== undefined){
                    alert("Login realizado com sucesso!")
                    window.Location.href= "page.html"
                }
                else {
                    alert("credenciais invalidas, por favor tente novamente!")
                }
            }
        }
        xhr.send()
    })
    
})
