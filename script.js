// TODO: Implement the password generation logic based on user input

export const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    // TODO: Create a variable for the character set based on selected options
    let PasswordVariable='';
    if (options.includeUppercase) PasswordVariable += uppercase;
    if (options.includeLowercase) PasswordVariable += lowercase;
    if (options.includeNumbers) PasswordVariable += numbers;
    if (options.includeSpecialChars) PasswordVariable += specialChars;

    if (PasswordVariable === '') {
        throw new Error('At least one character type must be selected.');
    }

    if (length < 8 || length > 128) {
        alert ('Password Terlalu Sedikit atau Banyak');
        return '';
    }
    
    // TODO: Generate the password based on the selected criteria
    let password = '';
    for (let i = 0; i < length; i+=1) {
        const randomVariable = Math.floor(Math.random() * PasswordVariable.length);
        password += PasswordVariable[randomVariable];
    }
    return password;
};

// TODO: Add event listener to the button to call generatePassword and display the output
