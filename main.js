let inputText = document.querySelector("#userInput");
let submitButton = document.querySelector("#submitButton");
let form = document.querySelector("form");

// Reference to the toppings checkboxes

let pepperoniCheckbox = document.querySelector("#pepperoni");
let mushroomsCheckbox = document.querySelector("#mushrooms");
let pineappleCheckbox = document.querySelector("#pineapple");
let jalapenoCheckbox = document.querySelector("#jalapeno");


// In order to grab the text from our input fields inside our forms, we use .value instead of .innerText
    // preventDefault() stops the automatic refresh

form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(`Name for delivery: ${inputText.value}`);
    console.log("Toppings: ")
    console.log(`Pepperoni: ${pepperoniCheckbox.checked}`);
    console.log(`Mushrooms: ${mushroomsCheckbox.checked}`);
    console.log(`Pineapple: ${pineappleCheckbox.checked}`);
    console.log(`Jalapeno: ${jalapenoCheckbox.checked}`);

    inputText.value = "";
})