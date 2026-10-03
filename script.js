

// function for jest
function convertToUpperCase(text) {
    return text.toUpperCase();
};


if (typeof document !== "undefined") {
    const inputField = document.getElementById('inputField');
    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', () => {
    const inputValue = inputField.value.trim();
    
    const upperCaseValue = convertToUpperCase(inputValue);
    console.log(upperCaseValue); 
});
};

//export för jest 
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { convertToUpperCase };
};