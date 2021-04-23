let generateButton = document.getElementById("generate-button");
let printOutput = document.getElementById("output");

let generatePassword = () => {
    let length = 8;
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let output = "";

    for (let i = 0, n = charset.length; i < length; ++i) {
        output += charset.charAt(Math.random() * n);
    }

    // return output;
    printOutput.innerHTML = output;
}

generateButton.onclick = generatePassword;

// printOutput.innerHTML = generatePassword();
