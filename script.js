const getRandomChar = (charset) => {
    const randomIndex = Math.floor(Math.random() * charset.length);
    return charset[randomIndex];
};

const generatePassword = (length, options) => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    let availableChars = '';
    let password = '';

    if (options.includeUppercase) availableChars += uppercase;
    if (options.includeLowercase) availableChars += lowercase;
    if (options.includeNumbers) availableChars += numbers;
    if (options.includeSpecialChars) availableChars += specialChars;

    if (!availableChars.length) {
        return "Pilih minimal satu kriteria!";
    }

    for (let i = 0; i < length; i++) {
        password += getRandomChar(availableChars);
    }

    return password;
};

const copyToClipboard = (text) => {
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = text;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Password telah disalin ke clipboard!');
};

document.getElementById('generateBtn').addEventListener('click', () => {
    const length = document.getElementById('length').value;
    const options = {
        includeUppercase: document.getElementById('includeUppercase').checked,
        includeLowercase: document.getElementById('includeLowercase').checked,
        includeNumbers: document.getElementById('includeNumbers').checked,
        includeSpecialChars: document.getElementById('includeSpecialChars').checked,
    };

    const password = generatePassword(length, options);
    document.getElementById('passwordOutput').innerText = password;
});

// Event listener untuk tombol copy
document.getElementById('copyBtn').addEventListener('click', () => {
    const password = document.getElementById('passwordOutput').innerText;
    if (password) {
        copyToClipboard(password);
    } else {
        alert('Tidak ada password untuk disalin.');
    }
});
