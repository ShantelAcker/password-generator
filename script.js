const lowercaseBox = document.getElementById("lowercase-letters");
const uppercaseBox = document.getElementById("uppercase-letters");
const numbers = document.getElementById("numbers");
const specialChar = document.getElementById("special");
const unambiguous = document.getElementById("unambiguous");

const generateButton = document.getElementById("generate-button");
const printOutput = document.getElementById("output");
const copyButton = document.getElementById("copy-button");

let copyPassword = () => {
    //using clipboard api to copy the output
    const outputValue = printOutput.value;
    navigator.clipboard.writeText(outputValue);
    alert("Password Copied!");
}
//copy the output when the copy button is pressed
copyButton.onclick = copyPassword;

let generatePassword = () => {

    let length = 12;
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
    if (numbers.checked) {
        charset += "0123456789";
    }
    if (specialChar.checked) {
        // escape backslash with another backslash
        charset += "~!@#$%^&*_-+=`|\\(){}[]:;\"'<>,.?/";
    }

    //getting rid of ambiguous characters
    if (unambiguous.checked) {
        // charset -= "l1IO0";
        charset = charset.replace("l", "");
        charset = charset.replace("1", "");
        charset = charset.replace("I", "");
        charset = charset.replace("O", "");
        charset = charset.replace("0", "");
    }

    //add random characters from the charset to the generated password
    for (let i = 0, n = charset.length; i < length; ++i) {
        output += charset.charAt(Math.random() * n);
    }

    // print the random password
    printOutput.innerHTML = output;
    console.log(charset);
}

// generate random password and print the output when button is clicked
generateButton.onclick = generatePassword;
