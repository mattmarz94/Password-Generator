const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1 = document.getElementById("pass1");
let pass2 = document.getElementById("pass2");

let password = ""
const length = 15;

function generatePasscode() {
    for (let i = 0; i < length; i++){
    password1 += characters[Math.floor(Math.random() * characters.length)]
    pass1.textContent = password1;
    password2 += characters[Math.floor(Math.random() * characters.length)]
    pass2.textContent = password2;
    }
}
