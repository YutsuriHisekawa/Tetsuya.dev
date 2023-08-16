//Password Generator 
var generateBtn = document.getElementById('generateBtn');
var lengthInput = document.getElementById('length');
var includeUppercaseInput = document.getElementById('includeUppercase');
var includeNumbersInput = document.getElementById('includeNumbers');
var includeSymbolsInput = document.getElementById('includeSymbols');
var passwordDisplay = document.getElementById('password');

var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var symbols = '!@#$%^&*()_+-={}[]|\\:;"<>,.?/~';

generateBtn.addEventListener('click', () => {
    var length = lengthInput.value;
    var includeUppercase = includeUppercaseInput.checked;
    var includeNumbers = includeNumbersInput.checked;
    var includeSymbols = includeSymbolsInput.checked;

    let validChars = lowercaseLetters;
    if (includeUppercase) validChars += uppercaseLetters;
    if (includeNumbers) validChars += numbers;
    if (includeSymbols) validChars += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars[randomIndex];
    }

    passwordDisplay.innerText = password;
});

//Scroll

// Get the 'to top' button element by ID
var toTopButton = document.getElementById("to-top-button");

// Check if the button exists
if (toTopButton) {

    // On scroll event, toggle button visibility based on scroll position
    window.onscroll = function () {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            toTopButton.classList.remove("hidden");
        } else {
            toTopButton.classList.add("hidden");
        }
    };

    // Function to scroll to the top of the page smoothly
    window.goToTop = function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
}

// BoxCode 
new ClipboardJS('.code');