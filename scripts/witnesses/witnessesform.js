// import { useWitnesses, getWitnesses } from "./witnessesProvider.js"



// // THESE CONSTS TARGET THE HTML AREAS IN WHICH TO INSERT THE DYNAMICALLY RENDERED HTML
// //AND ARE GIVEN THE NAMES EVENTHUB AND CONTENT TARGET.
// const eventHub = document.querySelector(".container")
// const contentTarget = document.querySelector(".witness__header")

// //THIS COMPONENT DETECTS THE CLICK OF THE SHOW WITNESSES BUTTON AND DISPATCHES THE MESSAGE TO THE 
// //EVENTHUB TO BE LISTENED FOR BY THE WITNESS LIST.JS/COMPONENT
// const witnessformComponent = () => {
//     eventHub.addEventListener("click", clickEvent => {
//         if (clickEvent.target.id === "show--witnesses") {
//             const message = new CustomEvent("showWitnessesButtonClicked")
//             eventHub.dispatchEvent(message)
//         }
//     })

// //A VARIABLE NAMED RENDER IS DECLARED WHICH IS A FUNCTION THAT DYNAMICALLY INSERTS
// // THE BUTTON ELEMENT INTO THE DOM
//     const render = () => {
//         contentTarget.innerHTML = `

//             <button class="witnesses--button" id="show--witnesses">WITNESSES</button>

//         `
//     }

//     render()
// }

// export default witnessformComponent
