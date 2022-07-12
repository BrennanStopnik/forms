let inputText = document.querySelector("#userInput");
let submitButton = document.querySelector("#submitButton");
let form = document.querySelector("form");


// In order to grab the text from our input fields inside our forms, we use .value instead of .innerText
    // preventDefault() stops the automatic refresh

form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(inputText.value);
    inputText.value = "";
})