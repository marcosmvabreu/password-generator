let sliderElement =  document.querySelector("#slider")
let buttonElement = document.querySelector("#button")

let sizePassword = document.querySelector("#valor")
let password = document.querySelector("#password")

let passwordComposition = document.getElementById('opcoes')

let containerPassword = document.querySelector("#container-password")

let charsetComplete = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@*-."
let charsetSpecials = "!@*-."
let charsetNumbers = "0123456789"
let charsetLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
let charsetLettersAndNumubers = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

let newPassword = ""

sizePassword.innerHTML = sliderElement.value

slider.oninput = function(){
    sizePassword.innerHTML = this.value
}

function generetePassword(){
    let chosenOption = passwordComposition.options[passwordComposition.selectedIndex].value
    let pass = ""
    
    if(chosenOption == "completo"){
        pass = charsetSpecials.charAt(Math.floor(Math.random() * charsetSpecials.length));
    
        for(let i = 0, n = charsetComplete.length; i < sliderElement.value; ++i){
            pass += charsetComplete.charAt(Math.floor(Math.random() * n));
        }
    }
    else if(chosenOption == "letras"){
        for(let i = 0, n = charsetLetters.length; i < sliderElement.value; ++i){
            pass += charsetLetters.charAt(Math.floor(Math.random() * n))
        }
    }
    else if(chosenOption == "numeros"){
        for(let i = 0, n = charsetNumbers.length; i < sliderElement.value; ++i){
            pass += charsetNumbers.charAt(Math.floor(Math.random() * n))
        }
    }
    else if(chosenOption == "letras-numeros"){
        for(let i = 0, n = charsetLettersAndNumubers.length; i < sliderElement.value; ++i){
            pass += charsetLettersAndNumubers.charAt(Math.floor(Math.random() * n))
        }
    }

    containerPassword.classList.remove("hide")
    password.innerHTML = pass
    newPassword = pass
}

function copyPassword(){
    navigator.clipboard.writeText(newPassword)
    alert("Senha copiada com sucesso!!") 
}
