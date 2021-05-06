import { AddTheNumbers } from "./add.js"
import { subtractTheNumbers } from "./subtract.js"
import { divideTheNumbers } from "./divide.js"
import { multiplyTheNumbers } from "./multiply.js"

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
const addButton = document.querySelector("#add") // we reach into our query to 
// find the element with the id of "add", 
// we then assign it to "addButton"
addButton.addEventListener( // we are adding an addEventListener (function)
// to the variable of addButton and then defining the paramater within the parenthesis
     "click",
    (clickEvent) => {
        const sum = AddTheNumbers(1,2)
        answerContainer.innerHTML = sum // "answerContainer" is a variable, 
        // "innerHTML" assigns variable to a string. *outerHTML would completetly 
        // replace the "add" article with the answer, rather than inserting it. 
    }
)

// let's tell the DOM to listen for when the button is pressed (event is clicked)
const subtractButton = document.querySelector("#subtract") // we reach into our query to 
// find the element with the id of "subtract", 
// we then assign it to "subtractButton"
subtractButton.addEventListener( // we are adding an addEventListener (function)
// to the variable of addButton and then defining the paramater within the parenthesis
     "click",
    (clickEvent) => {
        const sum = subtractTheNumbers(1,2)
        answerContainer.innerHTML = sum // "answerContainer" is a variable, 
        // "innerHTML" assigns variable to a string. *outerHTML would completetly 
        // replace the "subtract" article with the answer, rather than inserting it. 
    }


)

// let's tell the DOM to listen for when the button is pressed (event is clicked)
const divideButton = document.querySelector("#divide") // we reach into our query to 
// find the element with the id of "divide", 
// we then assign it to "divideButton"
divideButton.addEventListener( // we are adding an addEventListener (function)
// to the variable of divideButton and then defining the paramater within the parenthesis
     "click",
    (clickEvent) => {
        const sum = divideTheNumbers(1,2)
        answerContainer.innerHTML = sum // "answerContainer" is a variable, 
        // "innerHTML" assigns variable to a string. *outerHTML would completetly 
        // replace the "divide" article with the answer, rather than inserting it. 
    }
)
// let's tell the DOM to listen for when the button is pressed (event is clicked)
const multiplyButton = document.querySelector("#multiply") // we reach into our query to 
// find the element with the id of "multiply", 
// we then assign it to "multiplyButton"
multiplyButton.addEventListener( // we are adding an addEventListener (function)
// to the variable of multiplyButton and then defining the paramater within the parenthesis
     "click",
    (clickEvent) => {
        const sum = multiplyTheNumbers(1,2)
        answerContainer.innerHTML = sum // "answerContainer" is a variable, 
        // "innerHTML" assigns variable to a string. *outerHTML would completetly 
        // replace the "multiply" article with the answer, rather than inserting it. 
    }
)
