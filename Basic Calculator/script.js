// Get the input box element
let input = document.getElementById('inputBox');
// Get all button elements
let buttons = document.querySelectorAll('button');

// Initialize an empty string to store the input value
let string = "";

// Convert the NodeList of buttons to an array
let arr = Array.from(buttons);
// Add an event listener to each button
arr.forEach(button => {    
    button.addEventListener('click', (e) =>{
       // If the '=' button is clicked, evaluate the input string as math expression
        if(e.target.innerHTML == '='){
            string = eval(string);// Evaluate the string as a math expression
            input.value = string;// Display the result in the input box
        }
 // If the 'AC' button is clicked, clear the input string
        else if(e.target.innerHTML == 'AC'){
            string = "";// Clear the input string
            input.value = string;// Clear the input box
        }
        // If the 'DEL' button is clicked, delete the last character of the input string
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);// Delete the last character
            input.value = string;// Update the input box
        }
        // If any other button is clicked, append its value to the input string
        else{
            string += e.target.innerHTML;// If any other button is clicked, append its value to the input string
            input.value = string;// Update the input box
        }
        
    })
})