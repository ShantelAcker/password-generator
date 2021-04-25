const lowercaseBox = document.getElementById("lowercase-letters");
const uppercaseBox = document.getElementById("uppercase-letters");

const generateButton = document.getElementById("generate-button");
let printOutput = document.getElementById("output");


let generatePassword = () => {

    let length = 8;
    // let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let charset = "";
    let output = "";
    // if letters checkbox is checked
    // add letters to Charset
    if (lowercaseBox.checked) {
        charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (uppercaseBox.checked) {
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    //add random characters from the charset to the generated password
    for (let i = 0, n = charset.length; i < length; ++i) {
        output += charset.charAt(Math.random() * n);
    }

    // print the random password
    printOutput.innerHTML = output;
}

// generate random password and print the output when button is clicked
generateButton.onclick = generatePassword;
