import { AddTheNumbers } from "./add.js"

// we are referencing the first article 
const buttonContainer = document.querySelector("#buttons")

// we need a place to display the answer
const answerContainer = document.querySelector("#answer")

//creates clickable buttons in the html
buttonContainer.innerHTML = `
<button id="add">Add</button>
<button id="subtract">Subtract</button>
<button id="multiply">Multiply</button>
<button id="divide">Divide</button>
`


// let's tell the DOM to listen for when the button is pressed (event is clicked)
const addButton = document.querySelector("#add") // we reach into our query to find the element with the id of "add", 
// we then assign it to "addButton"
addButton.addEventListener( // we are adding an addEventListener (function)
// to the variable of addButton and then defining the paramater within the parenthesis
     "click",
    (clickEvent) => {
        const sum = AddTheNumbers(1,2)
        answerContainer.innerHTML = sum // "answerContainer" is a variable, "innerHTML" assigns variable to a string. *outerHTML would completetly replace the "add" article with the answer, rather than inserting it. 
    }
)
