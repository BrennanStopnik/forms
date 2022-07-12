let inputText = document.querySelector("#userInput");
let submitButton = document.querySelector("#submitButton");
let form = document.querySelector("form");

// Reference to the Toppings checkboxes

let pepperoniCheckbox = document.querySelector("#pepperoni");
let mushroomsCheckbox = document.querySelector("#mushrooms");
let pineappleCheckbox = document.querySelector("#pineapple");
let jalapenoCheckbox = document.querySelector("#jalapeno");

// Reference to the Crust Type radio buttons

let normalCrust = document.querySelector("#normal");
let thinCrust = document.querySelector("#thin");
let thickCrust = document.querySelector("#thick");
let deepDishCrust = document.querySelector("#deep-dish");


// In order to grab the text from our input fields inside our forms, we use .value instead of .innerText
    // preventDefault() stops the automatic refresh

form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(`Name for delivery: ${inputText.value}`);
    // Toppings
    console.log(`Toppings`)
    console.log(`Pepperoni: ${pepperoniCheckbox.checked}`);
    console.log(`Mushrooms: ${mushroomsCheckbox.checked}`);
    console.log(`Pineapple: ${pineappleCheckbox.checked}`);
    console.log(`Jalapeno: ${jalapenoCheckbox.checked}`);
    // Crust Type
    let crustType = "";
    if (normalCrust.checked === true){
        crustType = "Normal";
    } else if (thinCrust.checked === true){
        crustType = "Thin";
    } else if (thickCrust.checked === true){
        crustType = "Thick";
    } else if (deepDishCrust.checked === true){
        crustType = "Deep Dish";
    }
    console.log(`Crust Type: ${crustType}`)

    // When we submit our order, this will pop up on the screen
    if (inputText.value !== ""){
        alert(`You have successfully submitted an order for: 
        ${inputText.value}`);
    } else {
        alert(`Please enter a name for the order.`)
    };

    // Make the submission box empty after submit
    inputText.value = "";

    // reset checkmarks to empty after submit
    pepperoniCheckbox.checked = false;
    mushroomsCheckbox.checked = false;
    pineappleCheckbox.checked = false;
    jalapenoCheckbox.checked = false;

    // reset normal to default after submit
    normalCrust.checked = true;

})