const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let password1 = new Array(15);
let password2 = new Array(15);

let rectangle1El = document.getElementById("rectangle1")
let rectangle2El = document.getElementById("rectangle2")

const plus = document.querySelector(".plus"),
    minus = document.querySelector(".minus"),
    num = document.querySelector(".num");
let passwordLength = 1;
plus.addEventListener("click", () => {
    passwordLength++;
    passwordLength = (passwordLength < 10) ? "0" + passwordLength : passwordLength;
    num.innerText = passwordLength;
});

minus.addEventListener("click", () => {
    if (passwordLength > 1) {
        passwordLength--;
        passwordLength = (passwordLength < 10) ? "0" + passwordLength : passwordLength;
        num.innerText = passwordLength;
    }
});

function generatePassword1() {
    for (let i = 0; i < passwordLength; i++) {
        password1[i] = characters[Math.floor(Math.random() * characters.length)]
    }
}

function generatePassword2() {
    for (let i = 0; i < passwordLength; i++) {
        password2[i] = characters[Math.floor(Math.random() * characters.length)]
    }
}

function generatePassword() {
    rectangle1El.textContent = " ";
    rectangle2El.textContent = " ";
    generatePassword1();
    generatePassword2();

    for (let i = 0; i < passwordLength; i++) {
        rectangle1El.textContent += password1[i];
    }

    for (let i = 0; i < passwordLength; i++) {
        rectangle2El.textContent += password2[i];
    }
}









